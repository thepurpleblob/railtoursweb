import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/IndexPage.vue'),
    },
    {
      path: '/page/:slug',
      name: 'page',
      component: () => import('../pages/PageOther.vue'),
    },
    {
      path: '/tours',
      name: 'tours',
      component: () => import('../pages/TourList.vue'),
    },
    {
      path: '/tourpage/:code',
      name: 'tourpage',
      component: () => import('../pages/TourPage.vue'),
    },
  ],
})

export default router
