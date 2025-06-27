<script lang="ts" setup>
import MeditationList from '@/components/meditation-list.vue';
</script>

<template>
  <main class="main">
    <div class="content">
      <div class="left-panel">Left Panel</div>
      <div class="right-panel"><MeditationList /></div>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 40px 60px;
}

.content {
  display: flex;
  gap: 100px;
}

.left-panel {
  min-width: 370px;
}
</style>
