<script setup lang="ts">
import StringInput from '@/components/string-input.vue';
import TextButton from '@/components/text-button.vue';
import { useAuthStore } from '@/store/auth.store';
import { isAxiosError } from 'axios';

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

interface LoginForm {
  username: string;
  password: string;
}

const router = useRouter();
const authStore = useAuthStore();

const form = ref<LoginForm>({
  username: '',
  password: '',
});

const loading = ref(false);
const errorMessage = ref<string | null>(null);

const isFormValid = computed(() => {
  return form.value.username.trim().length > 0 && form.value.password.trim().length > 0;
});

async function handleSubmit() {
  if (!isFormValid.value) {
    errorMessage.value = 'Пожалуйста, заполните все поля.';
    return;
  }

  loading.value = true;
  errorMessage.value = null;

  try {
    await authStore.login(form.value.username, form.value.password);
    router.push({ name: 'main' });
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      console.error('Server responded:', err.response?.data);
    } else if (err instanceof Error) {
      console.error('Unexpected error:', err.message);
    } else {
      console.error('Unknown error:', err);
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form class="form-auth" @submit.prevent="handleSubmit">
    <StringInput v-model="form.username" placeholder="Имя пользователя" required />
    <StringInput v-model="form.password" type="password" placeholder="Пароль" required />

    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    <TextButton type="submit" :disabled="!isFormValid || loading">
      {{ loading ? 'Вход…' : 'Войти в приложение' }}
    </TextButton>
  </form>
</template>

<style scoped>
.form-auth {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 360px;
  margin: 0 auto;
}

.error {
  color: var(--color-error);
  font-size: 14px;
  text-align: center;
}
</style>
