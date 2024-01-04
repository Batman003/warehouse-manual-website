import React, { useState } from 'react';
import '../css/QuestionCard.css'

const QuestionCard = ({ questionIndex, question, options, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      onAnswer(questionIndex, option);
    };
  
  return (
    <div className="question-card">
      <h4>{question}</h4>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} 
          className={`option-item ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {selectedOption && <p>Selected: {selectedOption}</p>}
    </div>
  );
};

export default QuestionCard;
