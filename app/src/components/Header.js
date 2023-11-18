import React from 'react';
import './Style.css';
import gameTitleImage from '../assets/game-title.png'; 



function Header() {
  return (
    <header>
      <img src={gameTitleImage} alt="Game Title" />
    </header>
  );
}

export default Header;