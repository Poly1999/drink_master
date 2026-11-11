import { pool } from '@/lib/db';
import { CategoryDrinks } from '@/types/drink';
import { NextResponse } from 'next/server';

const categoryName = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];

export const GET = async () => {
  const result: CategoryDrinks[] = [];

  for (const category of categoryName) {
    const { rows } = await pool.query(
      `SELECT drinks.id , drinks.name, drinks.image_url 
      FROM drinks
      JOIN categories ON drinks.category_id = categories.id
      WHERE categories.name = $1
      ORDER BY drinks.created_at DESC
      LIMIT 3
      `,
      [category],
    );

    result.push({ category: category, drinks: rows });
  }
  return NextResponse.json(result);
};
