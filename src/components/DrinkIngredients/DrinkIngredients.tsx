import { CocktailsIngredients } from '@/types/drink';
import './DrinkIngredients.css';
import Image from 'next/image';

interface CocktailsIngredientsProps {
  ingredients: CocktailsIngredients[];
}

function DrinkIngredients({ ingredients }: CocktailsIngredientsProps) {
  return (
    <section className='drink-ingredients'>
      <h2 className='drink-ingredients__title'>Ingredients</h2>
      <ul className='drink-ingredients__list'>
        {ingredients.map(ingredient => (
          <li key={ingredient.id} className='drink-ingredients__item'>
            <Image
              src={
                ingredient.image_url
                  ? ingredient.image_url
                  : '/ingredients_placeholder.png'
              }
              alt='Ingredient image'
              className='drink-ingredients__img'
              width={220}
              height={220}
            />
            <p className='drink-ingredients__name'>{ingredient.title}</p>
            <p className='drink-ingredients__measure'>{ingredient.measure}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DrinkIngredients;
