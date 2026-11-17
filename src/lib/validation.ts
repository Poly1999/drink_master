export const validateName = (name: string) => {
  if (!name.trim()) {
    return 'Name is required.';
  }
  return '';
};

export const validateBirthDate = (date: Date | null) => {
  if (date === null) {
    return 'Please select your date of birth.';
  }

  return '';
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateEmail = (email: string) => {
  if (!email) {
    return 'Email is required.';
  }

  if (emailPattern.test(email) === false) {
    return 'Enter a valid email address.';
  }

  return '';
};

export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return 'Password must be at least 8 characters.';
  }

  return '';
};
