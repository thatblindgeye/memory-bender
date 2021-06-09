import React, { useState, useEffect, useRef } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Card from '../Card/Card';
import GameOverMessage from './GameOverMessage';
import formatName from '../../scripts/format-names';
import importedImages from '../../scripts/import-images';

export default function Gameboard() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Create and shuffle cards array before setting the cards state on mount.
  useEffect(() => {
    let temporaryCards = [];

    importedImages.forEach((image, index) => {
      const card = {
        name: formatName(image.default),
        url: image.default,
        clicked: false,
        id: index,
      };

      temporaryCards.push(card);
    });

    setCards(shuffleCards(temporaryCards));
  }, []);

  // Scroll to the scoreboard when the cards state is updated.
  const scoreboardContainer = useRef(null);
  useEffect(() => {
    const scoreboardOffset = scoreboardContainer.current.offsetTop;
    document.documentElement.scrollTop = scoreboardOffset;
  }, [cards]);

  /* Bring focus back to the top of the gameboard after clicking a card.
   * Since the cards get shuffled on each click and the tabbing picks up in
   * the previously clicked card's new position, it might be annoying to
   * navigate with the kayboard otherwise.
   */
  const gameboardContainer = useRef(null);
  useEffect(() => {
    if (currentScore > 0) {
      gameboardContainer.current.focus();
    }
  }, [currentScore]);

  const shuffleCards = (previousCards) => {
    const cardsCopyShuffle = previousCards.map((card) => ({ ...card }));
    let currentIndex = cardsCopyShuffle.length - 1;

    for (currentIndex; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      const temporaryCard = cardsCopyShuffle[currentIndex];

      cardsCopyShuffle[currentIndex] = cardsCopyShuffle[randomIndex];
      cardsCopyShuffle[randomIndex] = temporaryCard;
    }

    return cardsCopyShuffle;
  };

  const incrementScores = () => {
    if (highScore === currentScore) {
      setHighScore(highScore + 1);
    }
    setCurrentScore(currentScore + 1);
  };

  const handleCardClick = (e) => {
    const clickedCardID = Number(e.currentTarget.id);
    const clickedCardIndex = cards.findIndex(
      (card) => card.id === clickedCardID
    );

    if (cards[clickedCardIndex].clicked) {
      setGameOver(true);
    } else {
      const cardsCopyClick = cards.map((card) => {
        if (card.id === clickedCardID) {
          return { ...card, clicked: true };
        }
        return { ...card };
      });

      incrementScores();
      setCards(shuffleCards(cardsCopyClick));
    }
  };

  const handleResetGame = () => {
    const cardsCopyReset = cards.map((card) => {
      return { ...card, clicked: false };
    });

    setCards(shuffleCards(cardsCopyReset));
    setCurrentScore(0);
    setGameOver(false);
  };

  return gameOver ? (
    <GameOverMessage
      currentScore={currentScore}
      maxScore={cards.length}
      clickEvent={handleResetGame}
    />
  ) : (
    <div className='l-gameboard' ref={gameboardContainer} tabIndex='-1'>
      <div className='c-instructions'>
        <h2>Instructions</h2>
        <p>
          Each round you must click a character card that you have not yet
          clicked. The cards will be shuffled after every correct guess.
        </p>
      </div>
      <div className='c-scoreboard' ref={scoreboardContainer}>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <div className='l-card-container'>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              url={card.url}
              name={card.name}
              clickEvent={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}
