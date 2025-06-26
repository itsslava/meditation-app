<script setup lang="ts">
import MeditationList from './components/meditation-list.vue';
</script>

<template>
  <main class="main">
    <div class="header">Header</div>
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
.header {
  margin-bottom: 66px;
}
.content {
  display: flex;
  gap: 100px;
}

.left-panel {
  min-width: 370px;
}
</style>
