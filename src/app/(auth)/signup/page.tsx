'use client';

import BirthDateField from '@/components/BirthDateField/BirthDateField';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitEvent, useState } from 'react';
import toast from 'react-hot-toast';

interface AuthBody {
  name: string;
  birth_date: string;
  email: string;
  password: string;
}

function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [bday, setBday] = useState<Date | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (!bday) {
      toast.error('Please select your date of birth.');
      return;
    }

    const date = `${bday.getFullYear()}-${String(bday.getMonth() + 1).padStart(2, '0')}-${String(bday.getDate()).padStart(2, '0')}`;

    const newUser: AuthBody = { name, birth_date: date, email, password };

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created!🎉 Please sign in.');
        router.push('/signin');
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='auth-form'>
      <h1 className='auth-form__title'>Sign Up</h1>
      <form className='auth-form__fields' onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          className='auth-form__input'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <BirthDateField value={bday} onChange={setBday} />
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
