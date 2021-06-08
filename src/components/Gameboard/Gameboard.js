import React, { useState, useEffect } from 'react';
import formatName from '../../scripts/format-names';
import importedImages from '../../scripts/import-images';

export default function Gameboard() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

  return <div className='l-gameboard'></div>;
}
