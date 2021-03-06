import React from 'react';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <>
      <div
        className='c-scoreboard__score'
        aria-live='polite'
        aria-atomic='true'
      >
        <span className='c-scoreboard__name'>
          <strong>Current Score: </strong>
        </span>
        <span className='c-scoreboard__number'>{currentScore}</span>
      </div>
      <div
        className='c-scoreboard__score'
        aria-live='polite'
        aria-atomic='true'
      >
        <span
          className='c-scoreboard__name'
          aria-live='polite'
          aria-atomic='true'
        >
          <strong>High Score: </strong>
        </span>
        <span className='c-scoreboard__number'>{highScore}</span>
      </div>
    </>
  );
}
