import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import AboutPage from '../views/AboutPage.vue'
import SigninPage from '../views/SigninPage.vue'

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
    redirect: '/category'
  },
    {
    path: '/category',
    name: 'Category',
    component:CategoryPage
  },
    {
    path: '/',
    redirect: '/about'
  },
    {
    path: '/about',
    name: 'About',
    component:AboutPage
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SigninPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
