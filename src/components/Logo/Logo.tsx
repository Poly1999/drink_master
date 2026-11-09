import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/' className='logo'>
      <Image
        src='/logo.svg'
        alt='Drink Master Logo'
        className='logo__icon'
        width={28}
        height={28}
      />
      <span className='logo__text'>Drink Master</span>
    </Link>
  );
}

export default Logo;
