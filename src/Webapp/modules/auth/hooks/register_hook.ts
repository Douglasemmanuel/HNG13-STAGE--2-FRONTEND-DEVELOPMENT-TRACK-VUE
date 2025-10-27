// src/composables/useSignup.ts

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupResultSuccess {
  success: true;
  message: string;
}

export interface SignupResultFailure {
  success: false;
  message: string;
}

export type SignupResult = SignupResultSuccess | SignupResultFailure;

export const useSignup = () => {
  const signup = (data: SignupData): SignupResult => {
    if (!data) {
      return { success: false, message: 'No data provided' };
    }

    const existingUsers = localStorage.getItem('users');
    const users: SignupData[] = existingUsers ? JSON.parse(existingUsers) : [];

    const userExists = users.some((user) => user.email === data.email);
    if (userExists) {
      return { success: false, message: 'Email already registered!' };
    }

    if (data.password !== data.confirmPassword) {
      return { success: false, message: 'Passwords do not match!' };
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Registration successful!' };
  };

  return { signup };
};
