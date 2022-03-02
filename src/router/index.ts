import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import HombrePage from '../views/HombrePage.vue';
import MujerPage from '../views/MujerPage.vue';
import CarritoPage from '../views/CarritoPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/hombre',
    name: 'Hombre',
    component: HombrePage
  },
  {
    path: '/mujer',
    name: 'Mujer',
    component: MujerPage
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
