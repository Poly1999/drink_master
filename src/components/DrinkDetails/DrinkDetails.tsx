'use client';

import DrinkHero from '@/components/DrinkHero/DrinkHero';
import DrinkIngredients from '@/components/DrinkIngredients/DrinkIngredients';
import DrinkRecipe from '@/components/DrinkRecipe/DrinkRecipe';
import { Cocktails } from '@/types/drink';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function DrinkDetails() {
  const { id } = useParams();
  const [cocktails, setCocktails] = useState<Cocktails | null>(null);

  useEffect(() => {
    const getCocktails = async () => {
      const response = await fetch(`/api/drinks/${id}`);
      const data = await response.json();
      setCocktails(data);
    };
    getCocktails();
  }, [id]);

  return (
    <div>
      {cocktails ? (
        <div>
          <DrinkHero cocktails={cocktails} />
          <DrinkIngredients ingredients={cocktails.ingredients} />
          <DrinkRecipe instructions={cocktails.instructions} />
        </div>
      ) : (
        <div className='drink-page__loading'>
          <span className='drink-page__spinner'></span>
          <p className='drink-page__loading-text'>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default DrinkDetails;
