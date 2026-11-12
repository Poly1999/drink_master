import { Cocktails } from '@/types/drink';
import './DrinkHero.css';

import Image from 'next/image';

interface CocktailsProps {
  cocktails: Cocktails;
}

function DrinkHero({ cocktails }: CocktailsProps) {
  return (
    <section className='drink-hero'>
      <div className='drink-hero__info'>
        <h1 className='drink-hero__title'>{cocktails.name}</h1>
        <p className='drink-hero__meta'>
          {cocktails.glass} / {cocktails.alcoholic}
        </p>
        <p className='drink-hero__text'>{cocktails.short_description}</p>
        <button type='button' className='drink-hero__btn'>
          Add to favorite drinks
        </button>
      </div>
      <Image
        src={
          cocktails.image_url ? cocktails.image_url : '/drink-placeholder.png'
        }
        alt='Cocktail image hero'
        className='drink-hero__img'
        width={400}
        height={400}
      />
    </section>
  );
}

export default DrinkHero;
