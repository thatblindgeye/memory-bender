import React from 'react';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className='c-scoreboard'>
      <div className='c-scoreboard__score'>
        Current Score: <span>{currentScore}</span>
      </div>
      <div className='c-scoreboard__score'>
        High Score: <span>{highScore}</span>
      </div>
    </div>
  );
}
