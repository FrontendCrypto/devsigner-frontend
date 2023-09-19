import { createRouter, createWebHistory } from 'vue-router';
import ArticleView from '../views/ArticleView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "homepageView" */ '../views/HomepageView.vue'
      ),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () =>
      import(/* webpackChunkName: "blogView" */ '../views/BlogView.vue'),
  },
  {
    path: '/article/:id',
    component: () =>
      import(/* webpackChunkName: "articleView" */ '../views/ArticleView.vue'),
    name: 'article',
  },
  {
    path: '/gallery/:id',
    component: () =>
      import(/* webpackChunkName: "galleryView" */ '../views/GalleryView.vue'),
    name: 'gallery',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
