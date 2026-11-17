import Link from 'next/link';
import './Welcome.css';

function Welcome() {
  return (
    <div className='welcome__content'>
      <h1 className='welcome__title'>Welcome to the app!</h1>
      <p className='welcome__text'>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
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
  );
}

export default Welcome;
