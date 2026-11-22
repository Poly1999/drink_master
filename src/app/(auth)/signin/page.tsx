'use client';

import FormField from '@/components/FormField/FormField';
import { validateEmail, validatePassword } from '@/lib/validation';
import Link from 'next/link';
import { SubmitEvent, useState } from 'react';

interface FormErrors {
  email: string;
  password: string;
}

interface AuthBody {
  email: string;
  password: string;
}

function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({ email: '', password: '' });

  const handleEmailBlur = () => {
    setErrors({ ...errors, email: validateEmail(email) });
  };

  const handlePasswordBlur = () => {
    setErrors({ ...errors, password: validatePassword(password) });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    const body: AuthBody = { email, password };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
    } catch (error) {}
  };

  return (
    <div className='auth-form'>
      <h1 className='auth-form__title'>Sign In</h1>
      <form className='auth-form__fields' onSubmit={handleSubmit}>
        <FormField
          placeholder='Email'
          type='email'
          value={email}
          onChange={setEmail}
          onBlur={handleEmailBlur}
          error={errors.email}
        />
        <FormField
          placeholder='Password'
          type='password'
          value={password}
          onChange={setPassword}
          onBlur={handlePasswordBlur}
          error={errors.password}
        />
        <button type='submit' className='auth-form__btn'>
          Sign In
        </button>
      </form>
      <Link href='/signup' className='auth-form__link'>
        Sign Up
      </Link>
    </div>
  );
}

export default SigninPage;
