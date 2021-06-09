import React from 'react';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div className='c-scoreboard__score'>
        <span className='c-scoreboard__name'>Current Score: </span>
        <span className='c-scoreboard__number'>{currentScore}</span>
      </div>
      <div className='c-scoreboard__score'>
        <span className='c-scoreboard__name'>High Score: </span>
        <span className='c-scoreboard__number'>{highScore}</span>
      </div>
    </>
  );
}
