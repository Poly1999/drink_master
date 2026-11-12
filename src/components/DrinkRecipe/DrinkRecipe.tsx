import './DrinkRecipe.css';
import Image from 'next/image';

interface CocktailsInstructionsProps {
  instructions: string | null;
}

function DrinkRecipe({ instructions }: CocktailsInstructionsProps) {
  return (
    <section className='drink-recipe'>
      <h2 className='drink-recipe__title'>Recipe Preparation</h2>
      <div className='drink-recipe__content'>
        <Image
          src='/recipe_image.png'
          alt='Cocktail recipe image'
          className='drink-recipe__img'
          width={630}
          height={480}
        />
        <p className='drink-recipe__text'>{instructions}</p>
      </div>
    </section>
  );
}

export default DrinkRecipe;
