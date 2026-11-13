import Link from 'next/link';
import './Welcome.css';
import Image from 'next/image';

function Welcome() {
  return (
    <section className='welcome'>
      <div className='welcome__content'>
        <h1 className='welcome__title'>Welcome to the app!</h1>
        <p className='welcome__text'>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className='welcome__actions'>
          <Link href='/signup' className='welcome__btn welcome__btn--primary'>
            Sign Up
          </Link>
          <Link href='/signin' className='welcome__btn'>
            Sign In
          </Link>
        </div>
      </div>
      <Image
        src='/welcome.png'
        alt='Welcome Page Image'
        className='welcome__img'
        width={700}
        height={980}
      />
    </section>
  );
}

export default Welcome;
