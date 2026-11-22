'use client';

import BirthDateField from '@/components/BirthDateField/BirthDateField';
import FormField from '@/components/FormField/FormField';
import {
  validateBirthDate,
  validateEmail,
  validateName,
  validatePassword,
} from '@/lib/validation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitEvent, Suspense, useState } from 'react';
import toast from 'react-hot-toast';

interface AuthBody {
  name: string;
  birth_date: string;
  email: string;
  password: string;
}

interface FormErrors {
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
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    birth_date: '',
    email: '',
    password: '',
  });

  const handleNameBlur = () => {
    setErrors({ ...errors, name: validateName(name) });
  };

  const handleEmailBlur = () => {
    setErrors({ ...errors, email: validateEmail(email) });
  };

  const handlePasswordBlur = () => {
    setErrors({ ...errors, password: validatePassword(password) });
  };

  const handleBirthDateChange = (date: Date | null) => {
    setBday(date);
    setErrors({ ...errors, birth_date: validateBirthDate(date) });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      name: validateName(name),
      birth_date: validateBirthDate(bday),
      email: validateEmail(email),
      password: validatePassword(password),
    };

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.birth_date ||
      newErrors.email ||
      newErrors.password ||
      !bday
    ) {
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
      } else if (response.status === 409) {
        setErrors({ ...newErrors, email: data.message });
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
        <FormField
          type='text'
          placeholder='Name'
          value={name}
          onChange={setName}
          onBlur={handleNameBlur}
          error={errors.name}
        />
        <Suspense fallback={null}>
          <BirthDateField
            value={bday}
            onChange={handleBirthDateChange}
            error={errors.birth_date}
          />
        </Suspense>

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
