import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },

    {
      path: '/auth',
      component: () => import('@/layouts/auth-layout.vue'),
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import('@/views/auth/welcome-view.vue'),
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/login-view.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/auth/register-view.vue'),
        },
      ],
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
