import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  routes: [
    { path: '/', component: () => import('./views/main-view.vue') },
    {
      path: '/statistic',
      component: () => import('./views/statistic-view.vue'),
      name: 'statistic',
    },
  ],
  history: createWebHistory(),
});
