import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  await pool.query('INSERT INTO subscriptions (email) VALUES ($1)', [email]);

  return NextResponse.json(
    { message: 'Subscription created!' },
    { status: 201 },
  );
};
