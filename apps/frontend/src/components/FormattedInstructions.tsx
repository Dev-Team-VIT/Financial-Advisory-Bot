import React from 'react';

interface FormattedInstructionsProps {
  instructions?: string;
}

const FormattedInstructions: React.FC<FormattedInstructionsProps> = ({ instructions }) => {
  const formatInstructions = (text: string | undefined) => {
    if (!text) {
      return [<p key="no-instructions">No instructions available</p>];
    }

    return text.split('\n').map((line, index) => {
      if (line.includes('Recommended Investments:')) {
        return <h2 key={index}>{line}</h2>;
      } else if (line.includes('Stocks:') || line.includes('Mutual Funds:') || line.includes('Fixed Deposits (FDs):')) {
        return <h3 key={index}>{line}</h3>;
      } else if (line.includes('Best Stock:') || line.includes('Stock Name:') || line.includes('Analysis:') ||
                 line.includes('Best Mutual Fund:') || line.includes('Fund Name:') || line.includes('Best FD Option:') ||
                 line.includes('FD Name:')) {
        return <p key={index} style={{ marginLeft: '20px', fontWeight: 'bold' }}>{line}</p>;
      } else if (line.includes('Comparative Analysis:') || line.includes('Final Recommendation:') || line.includes('Investment Strategy:')) {
        return <h3 key={index}>{line}</h3>;
      } else if (line.trim() !== '') {
        return <p key={index} style={{ marginLeft: '20px' }}>{line}</p>;
      }
      return <br key={index} />;
    });
  };

  return (
    <div className="formatted-instructions">
      {formatInstructions(instructions)}
    </div>
  );
};

export default FormattedInstructions;
