import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Import from '../pages/Import.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/import',
    name: 'Import',
    component: Import,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
