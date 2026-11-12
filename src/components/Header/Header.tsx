import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';
import './Header.css';
import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import Link from 'next/link';
import { Suspense } from 'react';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>

      <div className='header__actions'>
        <ThemeToggler />
        <Link href='/welcome' className='header__btn'>
          Sign in
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
