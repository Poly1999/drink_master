import { readFileSync } from 'node:fs';
import { Pool } from 'pg';

interface Recipe {
  drink: string;
  category: string;
  glass: string;
  alcoholic: string;
  description: string;
  shortDescription?: string;
  instructions: string;
  drinkThumb: string;
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const text = readFileSync('db/data/recipes.json', 'utf-8');
const recipes: Recipe[] = JSON.parse(text);

const formatName = (text: string) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

const categories = new Set(recipes.map(recipe => recipe.category));

for (const category of categories) {
  await pool.query('INSERT INTO categories (name) VALUES ($1)', [category]);
}

const glasses = new Set(recipes.map(recipe => formatName(recipe.glass)));

for (const glass of glasses) {
  await pool.query('INSERT INTO glasses (name) VALUES ($1)', [glass]);
}

for (const recipe of recipes) {
  await pool.query(
    `INSERT INTO drinks (name, short_description, description, instructions, image_url, alcoholic, category_id, glass_id) VALUES ($1, $2, $3, $4, $5, $6, (SELECT id FROM categories WHERE name = $7), (SELECT id FROM glasses WHERE name = $8)) `,
    [
      recipe.drink,
      recipe.shortDescription,
      recipe.description,
      recipe.instructions,
      recipe.drinkThumb,
      recipe.alcoholic,
      recipe.category,
      formatName(recipe.glass),
    ],
  );
}

await pool.end();
