import React from 'react';
import Accessibility from '../Accessibility/Accessibility';

export default function Header({ theme, toggleEvent }) {
  return (
    <header className={'l-header u-elevation--04dp'}>
      <Accessibility
        iconClasses='c-switch__icon c-switch__icon--base'
        theme={theme}
        toggleEvent={toggleEvent}
      />
      <div className='c-app-logo'>
        <h1 className='c-app-logo__title'>Memory-bender</h1>
      </div>
    </header>
  );
}
