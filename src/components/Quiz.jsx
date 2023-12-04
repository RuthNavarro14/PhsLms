import React, { useState } from 'react';

const Quiz = () => {
  const initialQuestions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Madrid', 'Paris', 'Rome', 'Berlin'],
      correctAnswer: 'Paris',
      userAnswer: null,
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Mars',
      userAnswer: null,
    },
  
  ];

  const [questions, setQuestions] = useState(initialQuestions.slice(0, 10));
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [showCompletedPopup, setShowCompletedPopup] = useState(false);

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].userAnswer = selectedAnswer;
    setQuestions(updatedQuestions);
    if (selectedAnswer === updatedQuestions[questionIndex].correctAnswer) {
      setTotalCorrectAnswers(totalCorrectAnswers + 1);
    }
  };

  const totalQuestions = questions.length;

  const handleQuizComplete = () => {
    setShowCompletedPopup(true);
    setShowScorePopup(true);
  };

  return (
    <div className="quiz-container">
    <h3>General Knowledge</h3>
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>Question {index + 1}</h2>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <button
                  onClick={() => handleAnswerSelect(index, option)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: question.userAnswer === option ? '#4caf50' : '#f0f0f0',
                    color: question.userAnswer === option ? '#fff' : '#333',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  {option}
                  {question.userAnswer === option && (
                    <span style={{ marginLeft: '8px', fontWeight: 'bold' }}></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

      <span className="Completed" onClick={handleQuizComplete}>Complete Quiz</span>
      {showScorePopup && (
        <div className="popup1">
          <div className="popup-content">
            <h2>Total Score</h2>
            <p>Total Correct Answers: {totalCorrectAnswers} out of {totalQuestions}</p>
            <p>Correct Answers Percentage: {(totalCorrectAnswers / totalQuestions) * 100}%</p>
            <button onClick={() => setShowScorePopup(false)}>Close</button>
          </div>
        </div>
      )}
      {showCompletedPopup && (
        <div className="popup1">
          <div className="popup-content">
            <h2>Quiz Completed!</h2>
            <button onClick={() => setShowCompletedPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
