import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { auth } from '@/firebase';

import TabsPage from "../views/TabsPage.vue"
import AuthPage from "../views/Authentication.vue"
import WelcomePage from '../views/WelcomePage.vue';
import HomePage from '../views/HomePage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import ClubPage from '../views/club/ClubPage.vue';
import AboutPage from '../views/AboutPage.vue';
import SigninPage from '../views/SigninPage.vue';
import SignupPage from '../views/SignupPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import DataPage from '../views/DataPage.vue';
import SingleclubPage from '../views/club/singleclubPage.vue';
import PaymentPage from '../views/paymentPage.vue';
import ThanksPage from '../views/ThanksPage.vue';
import Running from '../views/booking/Running.vue'
import Lists from '../views/booking/Lists.vue';
import All from '../views/booking/All.vue';
import Work from '../views/booking/Work.vue';
import Gym from '../views/booking/Gym.vue';
import Bang from '../views/booking/Bang.vue';
import Swim from '../views/booking/Swim.vue';
import Sport from '../views/booking/Sport.vue';
import Volleyball from '../views/booking/Volleyball.vue'; 
import ClubDetail from "../views/club/ClubDetail.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/WelcomePage.vue')
  },
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/club/:id',
    name: 'ClubDetail',
    component: ClubDetail
  },
  {
    path: '/',
    redirect: '/authentication'
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: AuthPage
  },
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
    redirect: '/single-club'
  },
  {
    path: '/single-club',
    name: 'SingleClub',
    component:SingleclubPage
  },       
    {
    path: '/',
    redirect: '/payment'
  },
  {
    path: '/payment',
    name: 'Payment',
    component:PaymentPage
  },
  {
    path: '/',
    redirect: '/thanks'
  },
  {
    path: '/thanks',
    name: 'thanks',
    component:ThanksPage
  },
  {
    path: '/',
    redirect: '/Lists'
  },
  {
    path: '/Lists',
    name: 'Lists',
    component: Lists
  },
  {
    path: '/Running',
    name: 'Running',
    component: Running
  },
  {
    path: '/All',
    name: 'All',
    component: All
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/Gym',
    name: 'Gym',
    component: Gym
  },
  {
    path: '/Bang',
    name: 'Bang',
    component: Bang
  },
  {
    path: '/Swim',
    name: 'Swim',
    component: Swim
  },
  {
    path: '/Sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/Volleyball',
    name: 'Volleyball',
    component: Volleyball
  }

  // { path: "*", redirect: "/" },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;