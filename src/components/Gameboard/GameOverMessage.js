import React from 'react';

export default function GameOverMessage({
  currentScore,
  maxScore,
  clickEvent,
}) {
  const winningMessage = (
    <>
      <h2>Congratulations</h2>
      You have restored balance and regained your honor. Click the button below
      to truly prove your mastery over memory-bending.
    </>
  );

  const losingMessage = (
    <>
      <h2>Game Over</h2>
      Your score was {currentScore}. That's rough, buddy. Click the button below
      to try and regain your honor.
    </>
  );

  const message = currentScore === maxScore ? winningMessage : losingMessage;

  return (
    <div>
      <div>{message}</div>
      <button
        type='button'
        className='c-button--contained'
        onClick={clickEvent}
      >
        Play again?
      </button>
    </div>
  );
}
