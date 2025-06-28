<script lang="ts" setup>
import IconButton from '@/components/icon-button.vue';

import CalmIcon from '@/icons/profile-icons/calm-icon.vue';
import RelaxIcon from '@/icons/profile-icons/relax-icon.vue';
import FocusIcon from '@/icons/profile-icons/focus-icon.vue';
import AnxiousIcon from '@/icons/profile-icons/anxious-icon.vue';

const menuItems = [
  { icon: CalmIcon, title: 'Спокойно' },
  { icon: RelaxIcon, title: 'Расслаблено' },
  { icon: FocusIcon, title: 'Фокусировано' },
  { icon: AnxiousIcon, title: 'Тревожно' },
];
</script>

<template>
  <div class="profile-panel">
    <img class="profile-img" src="../assets/profile-img.png" alt="User Avatar" />
    <h1 class="profile-title">Добро пожаловать, Наталья!</h1>
    <div class="profile-desc">Как вы сегодня себя чувствуете?</div>
    <ul class="profile-list">
      <li class="profile-list-item" v-for="item in menuItems" :key="item.title">
        <IconButton>
          <component :is="item.icon" />
          <template #title>{{ item.title }}</template>
        </IconButton>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.profile-list {
  display: flex;
  gap: 22px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.profile-img {
  margin-bottom: 30px;
}
.profile-title {
  margin-bottom: 2px;
  font-size: 30px;
  font-weight: 500;
}

.profile-desc {
  font-family: Alegreya Sans;
  font-size: 22px;
  opacity: 0.8;
  margin-bottom: 40px;
}
</style>
