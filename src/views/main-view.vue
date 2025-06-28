<script lang="ts" setup>
import MeditationList from '@/components/meditation-list.vue';
import ProfilePanel from '@/components/profile-panel.vue';
</script>

<template>
  <div class="content">
    <div class="left-panel"><ProfilePanel /></div>
    <div class="right-panel"><MeditationList /></div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}

.left-panel {
  min-width: 370px;
}
</style>
