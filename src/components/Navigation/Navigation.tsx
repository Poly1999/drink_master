'use client';

import { usePathname } from 'next/navigation';
import './Navigation.css';
import Link from 'next/link';

const navigation = [
  { text: 'Home', link: '/' },
  { text: 'Drinks', link: '/drinks' },
  { text: 'Add drink', link: '/add' },
  { text: 'My drinks', link: '/my' },
  { text: 'Favorites', link: '/favorites' },
];

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navigation.map(nav => (
          <li key={nav.link} className='nav__item'>
            <Link
              href={nav.link}
              className={
                pathname === nav.link
                  ? 'nav__link nav__link--active'
                  : 'nav__link'
              }
              aria-current={pathname === nav.link ? 'page' : undefined}
            >
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
