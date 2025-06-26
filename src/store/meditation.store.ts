import { API_ROUTES, http } from '@/api';
import type { Meditation } from '@/interfaces/meditation.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface ApiResponse {
  data: {
    meditations: Meditation[];
  };
  status: string;
}

export const useMeditationStore = defineStore('meditation', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    const response = await http.get<ApiResponse>(API_ROUTES.meditations);
    meditations.value = response.data.data.meditations;
  }

  return { meditations, fetchMeditations };
});
