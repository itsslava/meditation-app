import { API_ROUTES, client } from '@/api';
import type { User, ProfileResponse } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<User | null>(null);

  async function fetchProfile() {
    const { data } = await client().get<ProfileResponse>(API_ROUTES.profile);
    profile.value = data.data.user;
  }

  return { profile, fetchProfile };
});
