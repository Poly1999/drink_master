'use client';

import { useState } from 'react';
import './FormField.css';
import Image from 'next/image';

interface FormProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: string;
}

function FormField({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: FormProps) {
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    onBlur();
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const isValid = touched && error === '' && value !== '';

  const inputType =
    type === 'password' && showPassword === true ? 'text' : type;

  return (
    <div className='form-field'>
      <div className='form-field__control'>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onBlur={handleBlur}
          onChange={e => onChange(e.target.value)}
          className={`auth-form__input ${error ? 'auth-form__input--error' : ''} ${isValid ? 'auth-form__input--valid' : ''}`}
        />

        {error && type !== 'password' && (
          <Image
            src='/icons/error.svg'
            alt=''
            className='form-field__icon'
            width={24}
            height={24}
          />
        )}

        {isValid && type !== 'password' && (
          <Image
            src='/icons/valid.svg'
            alt=''
            className='form-field__icon'
            width={24}
            height={24}
          />
        )}

        {type === 'password' && (
          <button
            type='button'
            className='form-field__eye'
            aria-label='Toggle password visibility'
            onClick={togglePassword}
          >
            {showPassword === true ? (
              <Image src='/icons/eye.svg' alt='' width={24} height={24} />
            ) : (
              <Image src='/icons/eye-off.svg' alt='' width={24} height={24} />
            )}
          </button>
        )}
      </div>
      {error && <p className='form-field__error'>{error}</p>}
    </div>
  );
}

export default FormField;
