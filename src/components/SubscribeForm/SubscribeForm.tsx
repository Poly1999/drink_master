'use client';

import React, { useState } from 'react';
import './SubscribeForm.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValid = (value: string) => EMAIL_REGEX.test(value);

  const handleBlur = () => {
    if (email.trim() && !isValid(email)) {
      setError('Enter a valid email');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid(email)) {
      setError('Enter a valid email');
      return;
    }
  };

  return (
    <form className='subscribe-form' onSubmit={handleSubmit}>
      <p className='subscribe-form__text'>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <input
        type='email'
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setError('');
        }}
        onBlur={handleBlur}
        placeholder='Enter your email'
        autoComplete='email'
        aria-label='Email'
        className={
          error
            ? 'subscribe-form__input subscribe-form__input--error'
            : 'subscribe-form__input'
        }
      />
      {error && <p className='subscribe-form__error'>{error}</p>}
      <button
        type='submit'
        className='subscribe-form__btn'
        disabled={!email.trim()}
      >
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeForm;
