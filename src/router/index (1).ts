import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
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
import House from '../views/booking/House.vue'
import Lists from '../views/booking/Lists.vue';
import All from '../views/booking/All.vue';
import Work from '../views/booking/Work.vue';
import Music from '../views/booking/Music.vue';
import Travel from '../views/booking/Travel.vue';
import Study from '../views/booking/Study.vue';
import Sport from '../views/booking/Sport.vue';
import Shopping from '../views/booking/Shopping.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Authentication.vue')
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
    path: '/House',
    name: 'House',
    component: House
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
    path: '/Music',
    name: 'Music',
    component: Music
  },
  {
    path: '/Travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/Study',
    name: 'Study',
    component: Study
  },
  {
    path: '/Sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: Shopping
  }

  // { path: "*", redirect: "/" },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;