<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useMeditationStore } from '@/store/meditation.store';
import MeditationCard from '@/components/meditation-card.vue';

const store = useMeditationStore();
const meditations = computed(() => store.meditations);

onMounted(store.fetchMeditations);
</script>

<template>
  <main>
    <ul class="meditation-grid">
      <li v-for="m in meditations" :key="m.id">
        <MeditationCard :title="m.title" :description="m.description" :duration="m.duration_min" />
      </li>
    </ul>
  </main>
</template>

<style scoped>
.meditation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
