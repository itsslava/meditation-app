<script setup lang="ts">
import TextButton from '@/components/text-button.vue';
</script>

<template>
  <div class="welcome">
    <h1 class="title">Добро пожаловать!</h1>
    <div class="desc">Медитируй и оставайся в фокусе, чтобы быть счастливым.</div>
    <TextButton>Войти в приложение</TextButton>
  </div>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-family: Alegreya;
  font-weight: 700;
  font-size: 34px;
  text-align: center;
}
.desc {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  max-width: 317px;

  margin-bottom: 40px;
}
</style>
