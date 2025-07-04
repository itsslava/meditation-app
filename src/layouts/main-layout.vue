<script setup lang="ts">
import HeaderMain from '@/components/header-main.vue';
</script>
<template>
  <div class="main-layout">
    <header>
      <HeaderMain />
    </header>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.main-layout {
  padding: 40px 60px;
}
</style>
