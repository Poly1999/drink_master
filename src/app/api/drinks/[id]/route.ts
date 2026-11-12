import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (
  request: Request,
  ctx: RouteContext<'/api/drinks/[id]'>,
) => {
  const { id } = await ctx.params;

  const { rows } = await pool.query(
    `
        SELECT drinks.id , drinks.name , drinks.alcoholic , drinks.image_url , drinks.short_description , drinks.instructions , glasses.name AS glass
        FROM drinks
        JOIN glasses ON drinks.glass_id = glasses.id
        WHERE drinks.id = $1`,
    [id],
  );

  if (rows.length === 0) {
    return NextResponse.json({ message: 'Drink not found' }, { status: 404 });
  }

  const { rows: ingredients } = await pool.query(
    `
        SELECT drink_ingredients.measure ,ingredients.id, ingredients.title , ingredients.image_url
        FROM drink_ingredients
        JOIN ingredients ON drink_ingredients.ingredient_id = ingredients.id
        WHERE drink_ingredients.drink_id = $1
        `,
    [id],
  );

  return NextResponse.json({ ...rows[0], ingredients });
};
