import React, { useState, useEffect } from 'react';
import './Style.css';
import questions from './data.json'; 
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png'; 

function GameContentGuess() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [timer, setTimer] = useState(60);
    const [guess, setGuess] = useState('');
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [score, setScore] = useState(0); // Added score state
    const [previousGuesses, setPreviousGuesses] = useState([]); // State for storing previous guesses

    useEffect(() => {
      setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
    }, []);
  
    useEffect(() => {
      if (isTimerActive) {
        if (timer > 0) {
          const intervalId = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
          }, 1000);
          return () => clearInterval(intervalId);
        } else {
          setIsTimerActive(false);
          // Handle timer running out
        }
      }
    }, [timer, isTimerActive]);
  
    const handleGuessChange = (event) => {
      setGuess(event.target.value);
    };
  
    const submitGuess = () => {
      // Add the current guess to previous guesses
      setPreviousGuesses(prevGuesses => [...prevGuesses, guess]);
      // Logic to check the guess and update score goes here

      // Reset for next guess
      setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
      setTimer(60);
      setIsTimerActive(true);
      setGuess('');
    };
  
    if (currentQuestionIndex === null) {
      return <p>Loading...</p>;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div className="game-content">
        <div className="scoreboard">
          <img src={avatar1} alt="Player 1 Avatar" className="avatar" />
          <span className="score"> {score}</span> 
          <img src={avatar2} alt="Player 2 Avatar" className="avatar" />
        </div>
        <div className="question-card">
          <p className="question">{currentQuestion.question}</p>
          <div className="clue-display">Clues: ______</div> {/* Write code for clue */}
          <div className="previous-guesses-display">
            Previous Guesses: {previousGuesses.length > 0 ? previousGuesses.join(', ') : 'None'}
          </div> {/* Display for previous guesses */}
          <div className="timer">{timer} seconds remaining</div>
          <div>
            <input
            type="text"
            className="guess-input"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess here..."
            disabled={!isTimerActive}
          /></div>
          <button onClick={submitGuess} className="submit-guess">Submit Guess</button>
        </div>
      </div>
    );
}

export default GameContentGuess;
