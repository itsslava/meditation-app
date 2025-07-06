<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import type { RegisterResponse } from '@/interfaces/auth.interface';
import { useAuthStore } from '@/store/auth.store';
import { isAxiosError } from 'axios';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

interface RegisterForm {
  email: string;
  username: string;
  password: string;
}

const router = useRouter();
const authStore = useAuthStore();

const form = ref<RegisterForm>({
  email: '',
  username: '',
  password: '',
});

const loading = ref(false);
const errorMessage = ref<string | null>(null);

const isFormValid = computed(() => {
  return (
    form.value.email.trim().length > 0 &&
    form.value.username.trim().length > 0 &&
    form.value.password.trim().length >= 6 &&
    form.value.email.includes('@')
  );
});

async function handleSubmit() {
  if (!isFormValid.value) {
    errorMessage.value = 'Пожалуйста, заполните все поля и введите корректный email.';
    return;
  }
  loading.value = true;
  errorMessage.value = null;

  try {
    const response = (await authStore.register(
      form.value.email,
      form.value.username,
      form.value.password,
    )) as RegisterResponse;

    router.push('/auth/login');
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
    <StringInput v-model="form.email" placeholder="Электронная почта" type="email" required />
    <StringInput v-model="form.username" placeholder="Имя пользователя" required />
    <StringInput
      v-model="form.password"
      placeholder="Пароль (минимум 6 символов)"
      type="password"
      required
    />

    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    <TextButton type="submit" :disabled="!isFormValid || loading">
      {{ loading ? 'Регистрация…' : 'Создать аккаунт' }}
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
