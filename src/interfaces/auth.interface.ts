import type { User } from './profile.interface';

export interface LoginResponse {
  data: {
    user: User;
    token: string;
  };
  message: string;
  status: 'success' | 'pending' | 'failure';
}

export interface RegisterResponse {
  data: User;
  message: string;
  status: 'success' | 'pending' | 'failure';
}
