import './Footer.css';

import Logo from '@/components/Logo/Logo';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Link from 'next/link';

const navigation = [
  { name: 'Drinks', link: '/drinks' },
  { name: 'Add drink', link: '/add' },
  { name: 'My drinks', link: '/my' },
  { name: 'Favorites', link: '/favorites' },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='footer__brand'>
          <Logo />
          <SocialLinks />
        </div>
        <nav className='footer__nav'>
          <ul className='footer__list'>
            {navigation.map(nav => (
              <li key={nav.link}>
                <Link href={nav.link} className='footer__link'>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='footer__subscribe'></div>
      </div>

      <div className='footer__bottom'>
        <p className='footer__copyright'>
          &copy;2026 Drink Master. All rights reserved.
        </p>
        <div className='footer__legal'>
          <Link href='/privacy' className='footer__legal-link'>
            Privacy Policy
          </Link>
          <Link href='/terms' className='footer__legal-link'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
