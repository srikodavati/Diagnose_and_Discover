import React, { useState, useEffect } from 'react';
import './Style.css';
import questions from './data.json'; 
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png'; 

function GameContent() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [clue, setClue] = useState('');
  const [isTimerActive, setIsTimerActive] = useState(true);

  const getRandomQuestionIndex = (currentIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (questions.length > 1 && randomIndex === currentIndex);
    return randomIndex;
  };

  useEffect(() => {
    setCurrentQuestionIndex(getRandomQuestionIndex());
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      if (timer > 0) {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      } else {
        // Handle what happens when the timer runs out
        setIsTimerActive(false);
      }
    }
  }, [timer, isTimerActive]);

  useEffect(() => {
    if (currentQuestionIndex != null) {
      // Reset timer for new question
      setTimer(90);
      setIsTimerActive(true);
    }
  }, [currentQuestionIndex]);

  const nextQuestion = () => {
    setCurrentQuestionIndex(getRandomQuestionIndex(currentQuestionIndex));
    setClue('');
    setIsTimerActive(true);
  };

  if (currentQuestionIndex === null) {
    return <p>Loading...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="game-content">
      <div className="scoreboard">
        <img src={avatar1} alt="Player 1 Avatar" className="avatar" />
        <span className="score">{score}</span>
        <img src={avatar2} alt="Player 2 Avatar" className="avatar" />
      </div>
      <div className="question-card">
        <p className="question">{currentQuestion.question}</p>
        <h7 className="forbidden-words-heading">Forbidden words</h7>
        <ul className="forbidden-words">
          {currentQuestion.forbiddenWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
        <div className="timer">{timer} seconds remaining</div>
        <div>
        <input
          type="text"
          className="clue-input"
          value={clue}
          onChange={(e) => setClue(e.target.value)}
          placeholder="Enter your clue here..."
          disabled={!isTimerActive}
        />
        </div>
        <button onClick={nextQuestion} className="next-question">Next Question</button>
      </div>
    </div>
  );
}

export default GameContent;
