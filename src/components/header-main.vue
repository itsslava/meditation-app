<script lang="ts" setup>
import LogoIcon from '@/icons/logo-icon.vue';
import HeaderNav from './header-nav.vue';
</script>
<template>
  <header class="header">
    <LogoIcon />
    <HeaderNav />
  </header>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 62px;
}
</style>
