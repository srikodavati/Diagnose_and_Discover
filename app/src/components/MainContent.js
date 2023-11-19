import React, { useState, useEffect } from 'react';
import GameContent from './GameContent';
import leftRobotImage  from '../assets/Robot1.png';
import rightRobotImage  from '../assets/Robot2.png';

function MainComponent() {
  const [gameCode, setGameCode] =  useState(() => localStorage.getItem('gameCode') || '');
  const [playerName, setPlayerName] = useState('');
  const [enteredGameCode, setEnteredGameCode] = useState('');
  const [gameStage, setGameStage] = useState('landing'); 

  const handleStartGame = () => {
    const newGameCode = 'abc'; // This should be dynamically generated
    setGameCode(newGameCode);
    localStorage.setItem('gameCode', newGameCode); 
    setGameStage('start');
    console.log('Game started, code set to:', newGameCode);
  };

  useEffect(() => {
    console.log('Component mounted. Retrieved gameCode:', gameCode);
    localStorage.setItem('gameCode', gameCode);
  }, [gameCode]);


  const handleJoinGame = () => {
    console.log("Attempt to join with code:", enteredGameCode, "Stored Code:", gameCode);
    if (enteredGameCode === gameCode) {
      setGameStage('intro');
    } else {
      alert("Type valid code");
    }
  };

  const handleSubmit = () => {
    setGameStage('intro');
  };

  const renderLanding = () => (
    <div>
      <button class="button"  onClick={handleStartGame}>Start a New Game</button>
      <button  class="button" onClick={() => setGameStage('join')}>Join a Game</button>
    </div>
  );

  const renderStartGame = () => (
    <div>
      <p>Game Code: {gameCode}</p>
      <input
        type="text"
        class = 'input'
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button  class="button" onClick={handleSubmit}>Start Game</button>
    </div>
  );

  const renderJoinGame = () => (
    <div>
      <input
        type="text"
        class = 'input'
        placeholder="Enter Game Code"
        value={enteredGameCode}
        onChange={(e) => setEnteredGameCode(e.target.value)}
      />
      <input
        class = 'input'
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button  class="button" onClick={handleJoinGame}>Join Game</button>
    </div>
  );

  const renderIntro = () => (
    <div>
      <p>Welcome to the game, {playerName}!</p>
      <button className="button" onClick={() => setGameStage('introducton')}>Continue</button>
     
    </div>
  );

  const renderIntroductons = () => (
    <div>
      <h1>Game Introduction</h1>
      <p>
      Welcome, curious minds! As we embark on this exciting journey,
       let's briefly explore the essence of AI - a blend of technology
       and intellect, where computers learn and make decisions,
       much like us. Now, imagine this smart technology in healthcare:
       aiding doctors, personalizing treatments, and revolutionizing care.
       Let's dive in and uncover the wonders of AI in healthcare together! 🌟🏥🤖​
      </p>
      <button className="button" onClick={() => setGameStage('instruction')}>Continue</button>
    </div>
  );

  const renderInstructions = () => (
    <div>
      <h1>Game Instructions</h1>
      <h2>🌐 Welcome to the Insightful World of AI in Healthcare - The Guessing Game!</h2>
      <p>
      In each round, one player is the clue giver, 
      and the other is the guesser. The clue giver describes the AI 
      healthcare term without using specific taboo words in a single word,
      while the guesser tries to identify the term. Points are awarded based
      on the number of clues needed to guess correctly, with fewer clues earning more points.🎮🤔🌟​
      </p>
      <button className="button" onClick={() => setGameStage('questions')}>Continue</button>
      
    </div>
  );

  const renderQuestions = () => (
    <div>
      <h1>Game questions</h1>
      <button className="button" onClick={() => setGameStage('play')}>Continue</button>
      
    </div>
  );

  function renderleftImages() {
    if (gameStage !== 'play') {
      return (
        <>
          <img src={leftRobotImage} alt="Left Robot" className="sideImage"/>
          
        </>
      );
    }
  }

  function renderrightImages() {
    if (gameStage !== 'play') {
      return (
        <>
          <img src={rightRobotImage} alt="Left Robot" className="sideImage"/>
        </>
      );
    }
  }

  return (
    <div className="mainContent" >
   {renderleftImages()}
    <div  >
      {gameStage === 'landing' && renderLanding()}
      {gameStage === 'start' && renderStartGame()}
      {gameStage === 'join' && renderJoinGame()}
      {gameStage === 'intro' && renderIntro()}
      {gameStage === 'introducton' && renderIntroductons()}
      {gameStage === 'instruction' && renderInstructions()}
      {gameStage === 'questions' && renderQuestions()}
      {gameStage === 'play' &&<GameContent/>}
    </div>
    {renderrightImages()}
  </div>
  );
}

export default MainComponent;