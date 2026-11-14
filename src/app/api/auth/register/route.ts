import { pool } from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const { name, birth_date, email, password } = await request.json();

  if (!name || !birth_date || !email || !password) {
    return NextResponse.json(
      { message: 'All fields are required.' },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: 'Password should be at least 8 characters' },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query(
      'INSERT INTO users (name,email , password_hash ,birth_date) VALUES ($1, $2 , $3 , $4 )',
      [name, email, hashedPassword, birth_date],
    );
    return NextResponse.json({ message: 'User created.' }, { status: 201 });
  } catch (error) {
    if ((error as { code?: string }).code === '23505') {
      return NextResponse.json(
        { message: 'Email already in use.' },
        { status: 409 },
      );
    }
    console.error(error);
    return NextResponse.json({ message: 'Register failed.' }, { status: 400 });
  }
};
