import React from 'react';
import Accessibility from '../Accessibility/Accessibility';

export default function Header({ theme, toggleEvent }) {
  return (
    <header className={'l-header'}>
      <Accessibility
        iconClasses='c-switch__icon c-switch__icon--base'
        theme={theme}
        toggleEvent={toggleEvent}
      />
      <div className='c-app-logo'>
        <h1 className='c-app-logo__title'>Memory-bender</h1>
        <div className='c-app-logo__secondary'>
          "Long ago, the cards lived together in harmony. Then, everything
          changed when the memory game was created. Only you, master of memory,
          can defeat it."
        </div>
      </div>
    </header>
  );
}
