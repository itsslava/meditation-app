export interface User {
  email: string;
  id: number;
  username: string;
}

export interface ProfileResponse {
  data: {
    user: User & { last_login_at: string };
  };
  status: 'success' | 'pending' | 'failure';
}
