import React, { useEffect, useRef } from 'react';

export default function GameOverMessage({
  currentScore,
  maxScore,
  clickEvent,
}) {
  const playAgainButton = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
    playAgainButton.current.focus();
  }, []);

  const win = {
    header: 'Congratulations',
    info: 'You have restored balance to the world, or at least beat the game. But can you prove you are truly a memory-bending master?',
  };

  const loss = {
    header: 'Game Over',
    info: `Your final score was ${currentScore}. That's rough, buddy. Want to try and regain your honor?`,
  };

  const message = currentScore === maxScore ? win : loss;

  return (
    <div className='l-game-over'>
      <h2 className='c-game-over__header'>{message.header}</h2>
      <p className='c-game-over__info'>{message.info}</p>
      <button
        type='button'
        className='c-button--contained c-game-over__button'
        onClick={clickEvent}
        ref={playAgainButton}
      >
        Click to play again
      </button>
    </div>
  );
}
