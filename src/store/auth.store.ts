import { API_ROUTES, http } from '@/api';
import type { LoginResponse, RegisterResponse } from '@/interfaces/auth.interface';
import type { User } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null);
  const user = ref<User | null>(null);

  const savedToken = localStorage.getItem(TOKEN_STORE_KEY);
  if (savedToken) {
    token.value = savedToken;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  const getToken = computed(() => token.value);

  function clearToken() {
    token.value = null;
    localStorage.removeItem(TOKEN_STORE_KEY);
    user.value = null;
  }

  async function login(username: string, password: string) {
    const { data } = await http.post<LoginResponse>(API_ROUTES.auth.login, {
      username,
      password,
    });

    setToken(data.data.token);
    user.value = data.data.user;
  }

  async function register(email: string, username: string, password: string) {
    const { data } = await http.post<RegisterResponse>(API_ROUTES.auth.register, {
      username,
      email,
      password,
    });

    user.value = data.data;
    return data;
  }

  return { getToken, setToken, login, register, clearToken, savedToken };
});
