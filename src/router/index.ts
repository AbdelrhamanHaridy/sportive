import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import ClubPage from '../views/ClubPage.vue'
import AboutPage from '../views/AboutPage.vue'
import SigninPage from '../views/SigninPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import DataPage from '../views/DataPage.vue'
import SingleclubPage from '../views/club/singleclubPage.vue'

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
    redirect: '/club'
  },
    {
    path: '/club',
    name: 'Club',
    component:ClubPage
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
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'Signin',
    component:SigninPage
  },
    {
    path: '/',
    redirect: '/signup'
  },
  {
    path: '/signup',
    name: 'Signup',
    component:SignupPage
  },
    {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/profile',
    name: 'Profile',
    component:ProfilePage
  },
    {
    path: '/',
    redirect: '/datauser'
  },
  {
    path: '/datauser',
    name: 'Datauser',
    component:DataPage
  },
    {
    path: '/',
    redirect: '/datauser'
  },
  {
    path: '/single-club',
    name: 'SingleClub',
    component:SingleclubPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router