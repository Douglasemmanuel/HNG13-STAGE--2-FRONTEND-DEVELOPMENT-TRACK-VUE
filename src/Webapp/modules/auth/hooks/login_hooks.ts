

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string; // optional if you don't want to expose it
}

// Define return type
interface LoginResultSuccess {
  success: true;
  user: User;
  message: string;
}

interface LoginResultFailure {
  success: false;
  message: string;
}

export type LoginResult = LoginResultSuccess | LoginResultFailure;

export const useLogin = (data: LoginData): LoginResult => {
  const existingUsers = localStorage.getItem('users');
  const users: User[] = existingUsers ? JSON.parse(existingUsers) : [];

  const user = users.find((user) => user.email === data.email);

  if (!user) {
    return { success: false, message: 'User not found!' };
  }

  if (user.password !== data.password) {
    return { success: false, message: 'Incorrect password!' };
  }

  localStorage.setItem('ticketapp_session', JSON.stringify(user));

  return { success: true, user, message: 'Login successful!' };
};

