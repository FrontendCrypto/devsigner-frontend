import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/HomepageView.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
  },
  {
    path: '/article/:id',
    component: () => import('../views/ArticleView.vue'),
    name: 'article',
  },
  {
    path: '/portfolio/:id',
    component: () => import('../views/PortfolioView.vue'),
    name: 'portfolio',
  },
  {
    path: '/gallery/:id',
    component: () => import('../views/GalleryView.vue'),
    name: 'gallery',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    store.commit('app/SET_LOADED', true);
  }
  next();
});

// router.beforeEach((to, from) => {
//   store.dispatch('app/loaded', false);
// });

router.afterEach((to, from) => {
  store.commit('app/SET_LOADED', true);
});

export default router;
