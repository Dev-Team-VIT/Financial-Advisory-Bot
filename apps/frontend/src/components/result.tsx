import React from 'react';
import FormattedInstructions from './FormattedInstructions';
import './InvestmentAdvice.css';

interface LastError {
  code: string;
  message: string;
}

interface Tool {
  type: string;
  function?: {
    name: string;
    description: string;
    parameters: {
      type: string;
      properties: {
        [key: string]: {
          type: string;
          description: string;
        };
      };
      required: string[];
    };
  };
}

interface Usage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}

interface InvestmentData {
  id: string;
  assistant_id: string;
  cancelled_at: string | null;
  completed_at: string | null;
  created_at: number;
  expires_at: string | null;
  failed_at: number;
  incomplete_details: string | null;
  instructions: string;
  last_error: LastError;
  max_completion_tokens: string | null;
  max_prompt_tokens: string | null;
  metadata: object;
  model: string;
  object: string;
  required_action: string | null;
  response_format: string;
  started_at: number;
  status: string;
  thread_id: string;
  tool_choice: string;
  tools: Tool[];
  truncation_strategy: {
    type: string;
    last_messages: string | null;
  };
  usage: Usage;
  temperature: number;
  top_p: number;
  tool_resources: object;
}

const investmentData: InvestmentData = {
  id: "run_2X3ZJZsuNEKRbzmAQzSRy33D",
  assistant_id: "asst_Kqsj55EX0tMi1rQsp8PNY0wm",
  cancelled_at: null,
  completed_at: null,
  created_at: 1722025528,
  expires_at: null,
  failed_at: 1722025544,
  incomplete_details: null,
  instructions: "Kindly provide all the outputs in the below format only and be more specific about the stocks and investments you are recommending and provide proper names of stocks and mutuals I need to invest and not the domains only and the amount.\n\nOutput Format:\n\nRecommended Investments:\n\nStocks:\n\nRisk Tolerance: [Insert risk tolerance here]\nBest Stock:\nStock Name: [Insert best stock here]\nAnalysis: [Insert detailed analysis and reason why this stock is the best option based on risk tolerance, historical performance, future potential, and other relevant factors]\nMutual Funds:\n\nRisk Tolerance: [Insert risk tolerance here]\nBest Mutual Fund:\nFund Name: [Insert best mutual fund here]\nAnalysis: [Insert detailed analysis and reason why this mutual fund is the best option based on risk tolerance, historical performance, future potential, and other relevant factors]\nFixed Deposits (FDs):\n\nBest FD Option:\nFD Name: [Insert best FD option here]\nAnalysis: [Insert detailed analysis and reason why this FD option is the best choice based on interest rates, term, and other relevant factors]\nComparative Analysis:\n\nStocks vs. Mutual Funds vs. FDs:\nRisk: [Insert comparison of risk levels associated with each option]\nReturn: [Insert comparison of potential returns based on historical data and future projections]\nLiquidity: [Insert comparison of the liquidity of each investment type]\nTime Horizon: [Insert comparison of the suitability of each investment based on the user's time horizon]\nFinal Recommendation:\n\nRecommendation: [Insert final recommendation here]\nSummary: [Insert summary explaining why this is the best choice considering risk tolerance, returns, liquidity, and time horizon]\nInvestment Strategy:\n\nDiversification: [Insert advice on ensuring investments are diversified across various asset classes to mitigate risk]\nRegular Review: [Insert advice on periodically reviewing the portfolio to realign with financial goals and market conditions]\nLong-Term Perspective: [Insert advice on focusing on long-term gains rather than short-term fluctuations, especially with stocks and mutual funds]\nNote:\nAll investments are subject to market risks. Kindly read all related documents carefully before investing. The recommendations provided are based on current data and algorithms, and individual discretion is advised.\n\nAll outputs must be provided in the following JSON format with proper key-value pairs for all answers, including detailed names and analyses of recommended stocks, mutual funds, and fixed deposits.",
  last_error: {
    code: "rate_limit_exceeded",
    message: "Rate limit is exceeded. Try again in 45 seconds.",
  },
  max_completion_tokens: null,
  max_prompt_tokens: null,
  metadata: {},
  model: "gpt-4",
  object: "thread.run",
  required_action: null,
  response_format: "auto",
  started_at: 1722025528,
  status: "failed",
  thread_id: "thread_6lKtYc00Hya1PQ6NtXHvDwdY",
  tool_choice: "auto",
  tools: [
    {
      type: "code_interpreter",
    },
    {
      function: {
        name: "get_stock_price",
        description: "Get the current stock price",
        parameters: {
          type: "object",
          properties: {
            symbol: {
              type: "string",
              description: "The stock symbol like MSFT",
            },
          },
          required: ["symbol"],
        },
      },
      type: "function",
    },
  ],
  truncation_strategy: {
    type: "auto",
    last_messages: null,
  },
  usage: {
    completion_tokens: 0,
    prompt_tokens: 0,
    total_tokens: 0,
  },
  temperature: 1.0,
  top_p: 1.0,
  tool_resources: {},
};

const InvestmentAdvice: React.FC = () => {
  return (
    <div className="investment-advice">
      <h1>Investment Advice Details</h1>
      <FormattedInstructions instructions={investmentData.instructions} />
      <pre>{JSON.stringify(investmentData, null, 2)}</pre>
    </div>
  );
};

export default InvestmentAdvice;
