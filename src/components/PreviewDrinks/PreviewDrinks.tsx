'use client';

import { useEffect, useState } from 'react';
import './PreviewDrinks.css';
import { CategoryDrinks } from '@/types/drink';
import Link from 'next/link';
import DrinkCard from '@/components/DrinkCard/DrinkCard';

function PreviewDrinks() {
  const [categories, setCategories] = useState<CategoryDrinks[]>([]);

  useEffect(() => {
    const getDrinks = async () => {
      const response = await fetch('/api/drinks/mainpage');
      const data = await response.json();
      setCategories(data);
    };

    getDrinks();
  }, []);

  return (
    <section className='preview-drinks'>
      <ul className='preview-drinks__list'>
        {categories.map(category => (
          <li key={category.category} className='preview-drinks__category'>
            <h2 className='preview-drinks__title'>{category.category}</h2>

            <ul className='preview-drinks__cards'>
              {category.drinks.map(drink => (
                <li key={drink.id}>
                  <DrinkCard drink={drink} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link href='/drinks' className='preview-drinks__btn'>
        Other drinks
      </Link>
    </section>
  );
}

export default PreviewDrinks;
