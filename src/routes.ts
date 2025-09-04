import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/auth.store';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/auth',
      component: () => import('@/layouts/auth-layout.vue'),
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import('@/views/auth/welcome-view.vue'),
        },
        { path: 'login', name: 'login', component: () => import('@/views/auth/login-view.vue') },
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
        { path: '', name: 'main', component: () => import('@/views/main-view.vue') },
        {
          path: 'statistic',
          name: 'statistic',
          component: () => import('@/views/statistic-view.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/not-found-view.vue'),
    },
  ],
});

const publicPages = ['welcome', 'login', 'register'];

router.beforeEach((to) => {
  const authStore = useAuthStore();
  const token = authStore.getToken;

  if (!token && !publicPages.includes(to.name as string)) {
    return { name: 'login' };
  }

  if (token && publicPages.includes(to.name as string)) {
    return { name: 'main' };
  }
});
