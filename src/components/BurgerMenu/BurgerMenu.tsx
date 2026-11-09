'use client';

import { useState } from 'react';
import './BurgerMenu.css';
import Image from 'next/image';
import Logo from '@/components/Logo/Logo';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import Navigation from '@/components/Navigation/Navigation';
import Link from 'next/link';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type='button'
        onClick={openMenu}
        aria-expanded={isOpen}
        aria-label='Open menu'
        className='burger-menu__open'
      >
        <Image
          src='/burger.svg'
          alt=''
          width={32}
          height={32}
          className='burger-menu__icon'
        />
      </button>

      {isOpen && (
        <div className='burger-menu'>
          <div className='burger-menu__top'>
            <Logo />
            <div className='burger-menu__controls'>
              <ThemeToggler />
              <button
                type='button'
                onClick={closeMenu}
                aria-label='Close menu'
                className='burger-menu__close'
              >
                <Image
                  src='/close.svg'
                  alt=''
                  width={32}
                  height={32}
                  className='burger-menu__icon'
                />
              </button>
            </div>
          </div>
          <div className='burger-menu__body'>
            <Navigation />
            <div className='burger-menu__guest'>
              <p className='burger-menu__text'>
                Sign in to save favorites and add your own drinks.
              </p>
              <Link href='/welcome' className='burger-menu__btn'>
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BurgerMenu;
