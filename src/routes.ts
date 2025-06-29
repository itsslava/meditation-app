import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/layouts/main-layout.vue'),
      children: [
        {
          path: '',
          name: 'main',
          component: () => import('@/views/main-view.vue'),
        },
        {
          path: 'statistic',
          name: 'statistic',
          component: () => import('@/views/statistic-view.vue'),
        },
      ],
    },
  ],
});
