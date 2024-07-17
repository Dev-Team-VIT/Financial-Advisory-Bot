
import os
import openai
import yfinance as yf
import re
import datetime
import logging
from alpha_vantage.timeseries import TimeSeries
import requests
from textblob import TextBlob
import plaid
from plaid.api import plaid_api
from plaid.model.investments_holdings_get_request import InvestmentsHoldingsGetRequest
from plaid.model.investments_holdings_get_response import InvestmentsHoldingsGetResponse
from plaid.model.plaid_error import PlaidError

# Set up logging
logging.basicConfig(level=logging.INFO)

api_base = '<endpoint>'
api_key="<key>"
deployment_name = '<deployment_name>'
api_version = '2024-02-15-preview'

client = AzureOpenAI(
    api_key=api_key,
    api_version=api_version,
    base_url=f"{api_base}openai/deployments/{deployment_name}",
)
openai.api_key = api_key

# Alpha Vantage API key
alpha_vantage_key = 'your-alpha-vantage-api-key'

# Define the variables (these should be dynamically populated from your form input)
LPA = ''  # Example: '15'
risk_investment_options = ''  # Example: 'medium'
FD_amounts = []  # Example: [100000, 200000, 300000]
stock_investment = ''  # Example: '500000'
mutual_fund_investment = ''  # Example: '300000'
liquid_funds = ''  # Example: '200000'
suggested_tickers = []  # Example: ['AAPL', 'GOOGL', 'MSFT']
mutual_fund_symbols = []  # Example: ['VTSMX', 'VFINX']

# Helper function to send message to OpenAI API
def send_message_to_openai(messages):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=messages,
            max_tokens=30
        )
        return response.choices[0].message['content'].strip()
    except Exception as e:
        logging.error(f"Error communicating with OpenAI: {e}")
        return None

# Construct the initial message for ChatGPT
initial_message = f"""
I currently earn {LPA} LPA and am seeking {risk_investment_options} risk investment options.
I have FDs with amounts of {FD_amounts} respectively.
Additionally, I've invested {stock_investment} in the stock market and {mutual_fund_investment} in mutual funds.
I also have {liquid_funds} available as liquid funds for investment.
Please compare and recommend the best stocks, mutual funds, and potential FD investments for maximizing profit based on these specifics.
Specifically, provide recommended stocks for my risk category, suitable mutual funds,
and optimal FD investment options for the specified amounts.
"""

# Send the initial message to the OpenAI API
messages = [
    {"role": "system", "content": "You are a financial advisor."},
    {"role": "user", "content": initial_message}
]

initial_advice = send_message_to_openai(messages)
if not initial_advice:
    raise Exception("Failed to get initial advice from ChatGPT")
logging.info("Initial Advice from ChatGPT:")
logging.info(initial_advice)

# Extract suggested stock tickers from the initial advice using regular expressions
suggested_tickers = re.findall(r'\b[A-Z]{1,4}\b', initial_advice)
logging.info("Extracted Stock Tickers: %s", suggested_tickers)

# Fetch stock data using yfinance
stock_data = {}
for ticker in suggested_tickers:
    try:
        stock_data[ticker] = yf.Ticker(ticker).history(period="1y")
    except Exception as e:
        logging.error(f"Error fetching data for {ticker}: {e}")

# Fetch mutual fund data using Alpha Vantage
ts = TimeSeries(key=alpha_vantage_key, output_format='pandas')
mutual_fund_data = {}
for symbol in mutual_fund_symbols:
    try:
        mutual_fund_data[symbol], _ = ts.get_daily(symbol=symbol)
    except Exception as e:
        logging.error(f"Error fetching data for {symbol}: {e}")

# Generate textual description of stock and mutual fund data
description = "Stock prices over the last year:\n"
for ticker, data in stock_data.items():
    description += f"{ticker}: {data['Close'].tolist()}\n"

description += "\nMutual fund prices over the last year:\n"
for symbol, data in mutual_fund_data.items():
    description += f"{symbol}: {data['4. close'].tolist()}\n"

# Refine advice using real-time data
refinement_message = f"""
Based on the initial advice, here are the stock prices for the past year for the suggested stocks:

{description}

Please refine your recommendations based on this real-time financial data.
"""
messages.append({"role": "user", "content": refinement_message})
refined_advice = send_message_to_openai(messages)
if not refined_advice:
    raise Exception("Failed to get refined advice from ChatGPT")
logging.info("Refined Advice from ChatGPT:")
logging.info(refined_advice)

# Generate description for DALL-E
dalle_description = "A line graph showing the stock prices of "
dalle_description += ", ".join(suggested_tickers)
dalle_description += " and mutual funds "
dalle_description += ", ".join(mutual_fund_symbols)
dalle_description += " over the last year."

# Use DALL-E to create an image from the description
try:
    response = openai.Image.create(
        prompt=dalle_description,
        n=1,
        size="1024x1024"
    )
    dalle_image_url = response['data'][0]['url']
    logging.info(f"DALL-E generated image URL: {dalle_image_url}")
except Exception as e:
    logging.error(f"Error generating image with DALL-E: {e}")

# Output all results
print("Initial Advice:", initial_advice)
print("Refined Advice:", refined_advice)
print("DALL-E Image URL:", dalle_image_url)

# Plaid API configuration
''''client_id = 'your-client-id'
secret = 'your-secret'
environment = 'sandbox'  # Change to 'development' or 'production' as needed

client = plaid_api.PlaidApi(
    plaid.Configuration(
        host=plaid.Environment.Sandbox,  # Change to Environment.Development or Environment.Production as needed
        api_key={
            'clientId': client_id,
            'secret': secret,
        }
    )
)

access_token = 'access-token'

def get_portfolio_overview(access_token):
    try:
        request = InvestmentsHoldingsGetRequest(access_token=access_token)
        response = client.investments_holdings_get(request)
        return response
    except PlaidError as e:
        print(f"Error fetching portfolio overview: {e}")
        return None
'''

