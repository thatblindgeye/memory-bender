import React from 'react';

export default function Card({ clickEvent, url, name }) {
  return (
    <button className='c-card' type='button' onClick={clickEvent}>
      <img className='c-card__image' src={url} alt={name} />
      <div className='c-card__caption' aria-hidden='true'>
        {name}
      </div>
    </button>
  );
}
