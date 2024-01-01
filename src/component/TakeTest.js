import React, { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import ResultPage from './ResultPage';
import generateRandomizedQuestions from '../data/QuestionDataGenerator';
import '../css/TakeTest.css';

const randomQuestions = generateRandomizedQuestions();


export function TakeTest() {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const handleRetry = () => {
      setAnswers({});
      setSubmitted(false);
    };

    const handleAnswer = (questionIndex, selectedOption) => {
      console.log("handle answer questionIndex:");
      console.log(questionIndex);
      console.log("handle answer selectedOption:");
      console.log(selectedOption);
      console.log(` ${selectedOption}`);
      setAnswers(prevAnswers => {
        // Create a new object to avoid mutating the previous state
        const newAnswers = { ...prevAnswers, [questionIndex]: selectedOption };
        console.log("New Answers:", newAnswers);
        return newAnswers;
      });
      };

      const calculateScore = () => {
        const results = randomQuestions.map((question, index) => {
          const isCorrect = answers[question.questionId] === question.answer;
          return {
            isCorrect,
          };
        });
        console.log("Result After submit: "+results);
        const correctAnswers = results.filter(result => result.isCorrect);
        const score = (correctAnswers.length / randomQuestions.length) * 100;
        console.log("Score get: "+score);
        return { score, results };
      };

      const handleSubmit = () => {
        setSubmitted(true);
      };

      const renderResultPage = () => {
        const { score } = calculateScore();
        return (
          <ResultPage score={score} handleRetry={handleRetry} />
        );
      };
        
  return (
    <div>
    <Header />
    <div className="app">
      {!submitted ? (
        randomQuestions.map((questionData) => (
          <QuestionCard
            key={questionData.questionId}
            questionIndex={questionData.questionId}
            question={questionData.question}
            options={questionData.options}
            correctAnswer={questionData.answer} // Pass the correct answer to the QuestionCard component
            onAnswer={handleAnswer}
          />
        ))
      ) : (
        renderResultPage()
      )}
       {!submitted && (
          <button className='button' onClick={handleSubmit} disabled={submitted}>
            Submit
          </button>
        )}
        <Link to="/"><button className='back-button'>Back</button></Link>
    </div>
    
    <Footer />
    </div>
  );
}
