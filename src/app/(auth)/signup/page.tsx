'use client';

import Link from 'next/link';

function SignupPage() {
  return (
    <div className='auth-form'>
      <h1 className='auth-form__title'>Sign Up</h1>
      <form className='auth-form__fields'>
        <input placeholder='Name' type='text' className='auth-form__input' />
        <input
          placeholder='dd/mm/yyyy'
          type='text'
          className='auth-form__input'
        />
        <input placeholder='Email' type='email' className='auth-form__input' />
        <input
          placeholder='Password'
          type='password'
          className='auth-form__input'
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
