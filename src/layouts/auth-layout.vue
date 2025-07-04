<script setup lang="ts">
import LogoIcon from '@/icons/logo-icon.vue';
</script>
<template>
  <div>
    <main class="auth-layout">
      <LogoIcon width="202" height="213" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.auth-layout {
  background-image: url('../assets/bg-img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>
