import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import CatalogView from '@/views/Catalogo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: 'component_comms',
      name: 'component_comms',
      component: () => import('@/views/ComponentComm.vue'),
    },
  ],
})

export default router
