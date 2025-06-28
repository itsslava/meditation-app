<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import MeditationIcon from '@/icons/nav-icons/meditation-icon.vue';
import StatisticIcon from '@/icons/nav-icons/statistic-icon.vue';
import LogoutIcon from '@/icons/nav-icons/logout-icon.vue';

const menuItems = [
  { to: '/main', icon: MeditationIcon, label: 'Медитация' },
  { to: '/main/statistic', icon: StatisticIcon, label: 'Статистика' },
  { to: '/', icon: LogoutIcon, label: 'Выход' },
];
</script>
<template>
  <nav class="header-nav">
    <ul class="nav-list">
      <li v-for="item in menuItems" :key="item.to" class="nav-item">
        <RouterLink class="nav-link" :to="item.to" exact-active-class="active-link">
          <component :is="item.icon" />
          <span class="nav-link-text">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 106px;
}

.nav-item {
  position: relative;
}

.nav-link {
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover,
.active-link {
  opacity: 1;
}

.nav-item + .nav-item::before {
  content: '';
  position: absolute;
  left: -53px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 92px;
  background-color: #3a5051;
}

.nav-link {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.nav-link-text {
  font-family: Alegreya Sans;
  font-weight: 400;
  font-size: 22px;
  color: var(--color-fg);
}
</style>
