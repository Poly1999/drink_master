import Logo from '@/components/Logo/Logo';
import Navigation from '@/components/Navigation/Navigation';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import Link from 'next/link';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navigation />

      <div className='header__actions'>
        <ThemeToggler />
        <Link href='/welcome' className='header__btn'>
          Sign in
        </Link>
      </div>
    </header>
  );
}

export default Header;
