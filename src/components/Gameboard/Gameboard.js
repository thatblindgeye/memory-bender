import React, { useState, useEffect } from 'react';
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

  // create and shuffle cards array before setting the cards state
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

  // scroll to the top of the scoreboard when the cards state is updated
  useEffect(() => {
    const scoreboardOffset = document.querySelector('.c-scoreboard').offsetTop;
    document.documentElement.scrollTop = scoreboardOffset;
  }, [cards]);

  const shuffleCards = (previousCards) => {
    const cardsCopy = previousCards.map((card) => ({ ...card }));
    let currentIndex = cardsCopy.length - 1;

    for (currentIndex; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      const temporaryCard = cardsCopy[currentIndex];

      cardsCopy[currentIndex] = cardsCopy[randomIndex];
      cardsCopy[randomIndex] = temporaryCard;
    }

    return cardsCopy;
  };

  const handleCardClick = (e) => {
    const clickedID = Number(e.currentTarget.id);
    const clickedIndex = cards.findIndex((card) => card.id === clickedID);

    if (cards[clickedIndex].clicked) {
      setGameOver(true);
    } else {
      const cardsCopy = cards.map((card) => {
        if (card.id === clickedID) {
          return { ...card, clicked: true };
        }
        return { ...card };
      });

      setCurrentScore(currentScore + 1);
      setCards(shuffleCards(cardsCopy));
    }
  };

  const handleResetGame = () => {
    const cardsCopy = cards.map((card) => {
      return { ...card, clicked: false };
    });

    setCards(shuffleCards(cardsCopy));
    setCurrentScore(0);
    setGameOver(false);
  };

  return !gameOver ? (
    <div className='l-gameboard'>
      <div className='c-instructions'>
        <h2>Instructions</h2>
        <p>
          Each round you must click a character card that you have not yet
          clicked this game. The cards will be shuffled after every correct
          guess.
        </p>
        <p>
          If you make it to the end, you will prove you are a memory-bending
          master. If you guess incorrectly even once, you shall never regain
          your honor.
        </p>
      </div>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
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
  ) : (
    <GameOverMessage
      currentScore={currentScore}
      maxScore={cards.length}
      clickEvent={handleResetGame}
    />
  );
}
