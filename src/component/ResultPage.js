import React from 'react';
import '../css/ResultPage.css';

const ResultPage = ({ score, handleRetry }) => {
  const showRetryButton = score < 60;
  const isPassing = score >= 60;

  const getCircleStyle = () => {
    return isPassing ? 'passing' : 'failing';
  };

  const getAnimationClassName = () => {
    return isPassing ? 'pass-animation' : 'fail-animation';
  };

  return (
    <div className={`result-page ${getCircleStyle()} result-page ${getAnimationClassName()}`}>
        <h2>Your Score: {isPassing ? (
        <span className="pass-text">{score}%</span>
      ) : (
        <span className="fail-text">{score}%</span>
      )}</h2>
      {isPassing ? (
        <p className="pass-text">Congratulations! You passed.</p>
      ) : (
        <p className="fail-text">Sorry, you didn't reach the passing mark. Try again!</p>
      )}
      <div className="score-container">
      <div className="percentage-text">{score}%</div>
      </div>
      {showRetryButton && (
        <button className="retry-button" onClick={handleRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default ResultPage;
