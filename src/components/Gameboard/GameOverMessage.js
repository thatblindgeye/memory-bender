import React from 'react';

export default function GameOverMessage({
  currentScore,
  maxScore,
  clickEvent,
}) {
  const win = {
    header: 'Congratulations',
    info: 'You have restored balance to the world, or at least beat the game. Click the button below to truly prove your mastery over memory-bending.',
  };

  const loss = {
    header: 'Game Over',
    info: `Your final score was ${currentScore}. That's rough, buddy. Click the button below to try and regain your honor.`,
  };

  const message = currentScore === maxScore ? win : loss;

  return (
    <div>
      <div className='c-game-over'>
        <h2 className='c-game-over__header'>{message.header}</h2>
        <p className='c-game-over__info'>{message.info}</p>
      </div>
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
