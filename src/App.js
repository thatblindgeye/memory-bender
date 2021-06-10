import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';
import githubDark from './assets/images/logos/GitHub-White-Mark-32px.png';
import githubLight from './assets/images/logos/GitHub-Black-Mark-32px.png';

export default function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme from local storage or set theme in local storage
  // when component mounts
  useEffect(() => {
    let savedTheme = localStorage.getItem('theme');

    if (!localStorage.getItem('theme')) {
      savedTheme = 'dark';
      localStorage.setItem('theme', savedTheme);
    }
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  const githubLogo = theme === 'light' ? githubLight : githubDark;

  return (
    <>
      <Header theme={theme} toggleEvent={handleThemeToggle} />
      <main aria-live='polite'>
        <Gameboard />
      </main>
      <footer className='l-footer'>
        <div className='c-footer__credits'>
          Credit for the images used in this project goes to{' '}
          <a
            href='https://avatar.fandom.com/wiki/Avatar_Wiki'
            className='c-link'
          >
            The Avatar Wiki
          </a>
        </div>
        <div className='c-footer__links'>
          <a href='https://github.com/thatblindgeye' className='c-link--image'>
            <img src={githubLogo} alt='' className='c-link__image' />
            @thatblindgeye on GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
