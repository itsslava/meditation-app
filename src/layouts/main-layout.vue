<script setup lang="ts">
import HeaderMain from '@/components/header-main.vue';
</script>
<template>
  <div class="layout">
    <header>
      <HeaderMain />
    </header>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.layout {
  padding: 40px 60px;
}
</style>
