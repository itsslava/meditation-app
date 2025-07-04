<script setup lang="ts">
import StringInput from '@/components/string-input.vue';
import TextButton from '@/components/text-button.vue';
</script>

<template>
  <form class="form-login">
    <StringInput placeholder="Имя пользователя" />
    <StringInput placeholder="Пароль" />
    <TextButton>Войти в приложение</TextButton>
  </form>
</template>
<style scoped>
.form-login {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
