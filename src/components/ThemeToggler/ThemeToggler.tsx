'use client';

import { useEffect } from 'react';
import './ThemeToggler.css';

function ThemeToggler() {
  const handleClick = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <button
      type='button'
      aria-label='Toggle theme'
      className='theme-toggler'
      onClick={handleClick}
    >
      <span className='theme-toggler__thumb'></span>
    </button>
  );
}

export default ThemeToggler;
