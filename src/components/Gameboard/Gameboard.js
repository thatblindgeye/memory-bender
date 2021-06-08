import React, { useState, useEffect } from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Card from '../Card/Card';
import formatName from '../../scripts/format-names';
import importedImages from '../../scripts/import-images';

export default function Gameboard() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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

  return (
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
          return <Card key={card.id} url={card.url} name={card.name} />;
        })}
      </div>
    </div>
  );
}
