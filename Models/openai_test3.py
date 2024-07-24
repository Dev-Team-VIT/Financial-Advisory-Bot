import os
import json
import matplotlib.pyplot as plt

from openai import AzureOpenAI


investment_type = input() #"Enter High risk,low risk,medium risk  
annual_income = "₹10 lakhs"  
num_fds = int(input()) #count of fds
fd_amounts = "₹4 lakhs each"  
mutual_fund_investment = input() #total mutual fund investment
investment_options_type = input() #high-risk,medium-risk,low-risk  

client = AzureOpenAI(
    api_key="2142e2507c494b74999fb3bb680aca1e",
    azure_endpoint="https://testingbot2.openai.azure.com/",
    api_version="2024-05-01-preview",
)

assistant_id = "asst_Kqsj55EX0tMi1rQsp8PNY0wm"
try:
    thread = client.beta.threads.create()
except Exception as e:
    print(f"Error creating thread: {e}")
    raise
try:
    message_content = (
        f"I am seeking {investment_type} investment advice based on my current financial situation. "
        f"Here are the details:\n"
        f"Annual Income: {annual_income}\n"
        f"Fixed Deposits (FDs): {num_fds} FDs of {fd_amounts}\n"
        f"Mutual Funds: Investment of {mutual_fund_investment}\n"
        f"Given this financial status, could you suggest some suitable {investment_options_type} investment options "
        f"that can help me diversify my portfolio and achieve high returns?\n"
        "Provide me specific information naming certain companies, FDs, stocks, and with their analytical data."
    )

    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=message_content
    )
except Exception as e:
    print(f"Error adding message: {e}")
    raise

try:
    run = client.beta.threads.runs.create_and_poll(
        thread_id=thread.id,
        assistant_id=assistant_id
    )
except Exception as e:
    print(f"Error running thread: {e}")
    raise

if run.status == "completed":
    try:
        messages_response = client.beta.threads.messages.list(thread_id=thread.id)
        
        response_json = {"messages": []}
        
        if hasattr(messages_response, 'data') and isinstance(messages_response.data, list):
            for message in messages_response.data:
                if message.role == 'assistant':
                    message_dict = {"id": message.id, "content": ""}
                    if hasattr(message, 'content') and isinstance(message.content, list):
                        content_list = []
                        for content_block in message.content:
                            if hasattr(content_block, 'text') and hasattr(content_block.text, 'value'):
                                content_list.append(content_block.text.value)
                        message_dict["content"] = " ".join(content_list)
                    response_json["messages"].append(message_dict)
        
        print(json.dumps(response_json, indent=2))
    
    except Exception as e:
        print(f"Error listing messages: {e}")
else:
    try:
        print(f"Run details: {run.to_json()}")
    except Exception as e:
        print(f"Error fetching run details: {e}")
