import React, { useState } from 'react';
import leftRobotImage  from '../assets/Robot1.png';
import rightRobotImage  from '../assets/Robot1.png';

function MainComponent() {
  const [gameCode, setGameCode] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [gameStage, setGameStage] = useState('landing'); 

  const handleStartGame = () => {
    // Here you would generate a unique game code
    const newGameCode = 'XYZ123'; // This should be dynamically generated
    setGameCode(newGameCode);
    setGameStage('start');
  };

  const handleJoinGame = () => {
    setGameStage('join');
  };

  const handleSubmit = () => {
    // Here you would verify the game code and player name
    // This is where your game's logic will determine if the inputs are correct
    // For now, we'll just transition to the intro stage
    setGameStage('intro');
  };

  const renderLanding = () => (
    <div>
      <button class="button"  onClick={handleStartGame}>Start a New Game</button>
      <button  class="button" onClick={handleJoinGame}>Join a Game</button>
    </div>
  );

  const renderStartGame = () => (
    <div>
      <p>Game Code: {gameCode}</p>
      <input
        type="text"
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
        placeholder="Enter Game Code"
        value={gameCode}
        onChange={(e) => setGameCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button  class="button" onClick={handleSubmit}>Join Game</button>
    </div>
  );

  const renderIntro = () => (
    <div>
      <p>Welcome to the game, {playerName}!</p>
      {/* Additional introductory content goes here */}
    </div>
  );

  return (
    <div className="mainContent" >
    <img src={leftRobotImage} alt="Left Robot" className="sideImage"/>
    <div  >
      {gameStage === 'landing' && renderLanding()}
      {gameStage === 'start' && renderStartGame()}
      {gameStage === 'join' && renderJoinGame()}
      {gameStage === 'intro' && renderIntro()}
    </div>
    <img src={rightRobotImage} alt="Right Robot" className="sideImage" />
  </div>
  );
}

export default MainComponent;
