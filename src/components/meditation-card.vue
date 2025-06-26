<script setup lang="ts">
import { defineProps } from 'vue';
import PlayIcon from '@/assets/icons/play-icon.vue';

const { title, description, duration } = defineProps<{
  title: string;
  description: string;
  duration: number;
}>();
</script>

<template>
  <div class="card">
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__desc">{{ description }}</p>
    <div class="card__footer">
      <button type="button" class="card__btn" aria-label="Начать {{ title }}">
        Start <PlayIcon />
      </button>
      <div class="card__duration">{{ duration }} min</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 340px;

  background: var(--color-card-bg);
  border-radius: 20px;
  padding: 22px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: var(--color-text);
}
.card__title {
  font-size: 25px;
  font-weight: 500;
}
.card__desc {
  font-family:
    Alegreya Sans,
    sans-serif;
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 16px;
}
.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background: var(--color-bg);
  color: var(--color-fg);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
}
.card__btn:hover {
  background: var(--color-bg-hover);
}

.card__duration {
  font-size: 15px;
  color: var(--color-bg);
}
</style>
