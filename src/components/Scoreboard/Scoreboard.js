import React from 'react';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div className='c-scoreboard__score'>
        <span className='c-scoreboard__name' aria-atomic='true'>
          <strong>Current Score: </strong>
        </span>
        <span className='c-scoreboard__number'>{currentScore}</span>
      </div>
      <div className='c-scoreboard__score'>
        <span className='c-scoreboard__name' aria-atomic='true'>
          <strong>High Score: </strong>
        </span>
        <span className='c-scoreboard__number'>{highScore}</span>
      </div>
    </>
  );
}
