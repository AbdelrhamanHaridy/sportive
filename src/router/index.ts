import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes: Array<RouteRecordRaw> = [
   {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomePage
  },
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
    path: '/',
    redirect: '/about'
  },
    {
    path: '/about',
    name: 'About',
    component:AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
