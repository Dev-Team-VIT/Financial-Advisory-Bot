import React from 'react';

interface ToggleProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  lable:string,
}

const Toggle: React.FC<ToggleProps> = ({ options, selectedOption, onOptionSelect, lable }) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <span className='ml-[5px]'>{lable}</span>
      <div className="flex bg-greyBg rounded-lg p-1 space-x-2 w-[fit-content] ">
        {options.map((option) => (
          <button
            key={option}
            className={`px-3 py-1 rounded-lg focus:outline-none ${selectedOption === option ? 'transition all ease-in-out bg-secondary text-white' : 'text-black'
              }`}
            onClick={() => onOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>

  );
};

export default Toggle;
