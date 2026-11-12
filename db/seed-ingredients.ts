import { readFileSync } from 'node:fs';
import { Pool } from 'pg';

interface Ingredient {
  title: string;
  ingredientThumb: string;
  alcohol: string;
}

interface RecipeIngredient {
  title: string;
  measure?: string;
}

interface Recipe {
  drink: string;
  ingredients: RecipeIngredient[];
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const textIng = readFileSync('db/data/ingredients.json', 'utf-8');
const ingredients: Ingredient[] = JSON.parse(textIng);

const textRec = readFileSync('db/data/recipes.json', 'utf-8');
const recipes: Recipe[] = JSON.parse(textRec);

for (const ingredient of ingredients) {
  await pool.query(
    'INSERT INTO ingredients (title, image_url, is_alcoholic) VALUES ($1, $2, $3) ON CONFLICT (title) DO NOTHING',
    [ingredient.title, ingredient.ingredientThumb, ingredient.alcohol],
  );
}

for (const recipe of recipes) {
  for (const item of recipe.ingredients) {
    await pool.query(
      `INSERT INTO drink_ingredients (drink_id, ingredient_id, measure) 
           SELECT (SELECT id FROM drinks WHERE name = $1) , id , $3
           FROM ingredients
           WHERE LOWER(title) = LOWER($2)
           LIMIT 1`,
      [recipe.drink, item.title, item.measure],
    );
  }
}

await pool.end();
