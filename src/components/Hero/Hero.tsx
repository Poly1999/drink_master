import Link from 'next/link';
import './Hero.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Craft Your Perfect Drink with Drink Master
        </h1>
        <p className='hero__text'>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world&apos;s
          finest beverages.
        </p>
        <Link href='/add' className='hero__btn'>
          Add drink
        </Link>
      </div>
      <Image
        src='/hero.png'
        alt='Three cocktails in hand'
        width={480}
        height={640}
        className='hero__image'
      />
    </section>
  );
}

export default Hero;
