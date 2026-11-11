import { Drink } from '@/types/drink';
import './DrinkCard.css';
import Image from 'next/image';
import Link from 'next/link';

interface DrinksProps {
  drink: Drink;
}

function DrinkCard({ drink }: DrinksProps) {
  return (
    <div className='drink-card'>
      <Image
        src={drink.image_url}
        alt={drink.name}
        width={400}
        height={400}
        className='drink-card__image'
      />
      <div className='drink-card__info'>
        <p className='drink-card__name'>{drink.name}</p>
        <Link href={`/drink/${drink.id}`} className='drink-card__link'>
          See more
        </Link>
      </div>
    </div>
  );
}

export default DrinkCard;
