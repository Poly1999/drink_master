import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const POST = async (request: Request) => {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    await pool.query('INSERT INTO subscriptions (email) VALUES ($1)', [email]);

    await transporter.sendMail({
      from: `Drink Master <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Drink Master!',
      html: '<p>Thank you for subscribing!</p>',
    });

    return NextResponse.json({ message: 'Subscribed!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Subscription failed' },
      { status: 400 },
    );
  }
};
