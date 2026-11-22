import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: 'Invalid credentials.' },
      { status: 400 },
    );
  }

  try {
    const { rows } = await pool.query(
      `
      SELECT id,name, email, password_hash, avatar_url
      FROM users
      WHERE email = $1
      `,
      [email],
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'Invalid credentials.' },
        { status: 401 },
      );
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials.' },
        { status: 401 },
      );
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });
    const response = NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Login failed.' }, { status: 500 });
  }
};
