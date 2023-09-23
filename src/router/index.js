import { createRouter, createWebHistory } from 'vue-router';

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
    meta: { gtm: 'Inicio' },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () =>
      import(/* webpackChunkName: "blogView" */ '../views/BlogView.vue'),
    meta: { gtm: 'Blog' },
  },
  {
    path: '/article/:id',
    component: () =>
      import(/* webpackChunkName: "articleView" */ '../views/ArticleView.vue'),
    name: 'article',
    meta: { gtm: 'Artículo - @TODO' },
  },
  {
    path: '/gallery/:id',
    component: () =>
      import(/* webpackChunkName: "galleryView" */ '../views/GalleryView.vue'),
    name: 'gallery',
    meta: { gtm: 'Galería - @TODO' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
