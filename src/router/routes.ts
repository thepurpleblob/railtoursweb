import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/SRPSLayout.vue'),
        children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
    },
    {
        path: '/page/:slug',
        component: () => import('layouts/SRPSLayout.vue'),
        children: [{ path: '', component: () => import('pages/PageOther.vue') }],
    },
    {
      path: '/tours',
      component: () => import('layouts/SRPSLayout.vue'),
      children: [{ path: '', component: () => import('pages/TourList.vue') }],
    },
    {
        path: '/tourpage/:code',
        component: () => import('layouts/SRPSLayout.vue'),
        children: [{ path: '', component: () => import('pages/TourPage.vue') }],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
