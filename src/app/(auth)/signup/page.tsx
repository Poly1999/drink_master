'use client';

import Link from 'next/link';
import { useState } from 'react';

function SignupPage() {
  const [name, setName] = useState('');
  const [bday, setBday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='auth-form'>
      <h1 className='auth-form__title'>Sign Up</h1>
      <form className='auth-form__fields'>
        <input
          placeholder='Name'
          type='text'
          className='auth-form__input'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder='dd/mm/yyyy'
          type='text'
          className='auth-form__input'
          value={bday}
          onChange={e => setBday(e.target.value)}
        />
        <input
          placeholder='Email'
          type='email'
          className='auth-form__input'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          type='password'
          className='auth-form__input'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' className='auth-form__btn'>
          Sign Up
        </button>
      </form>
      <Link href='/signin' className='auth-form__link'>
        Sign In
      </Link>
    </div>
  );
}

export default SignupPage;
