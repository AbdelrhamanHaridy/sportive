import { useAuthStore } from "@/store";
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import HomePage from '../views/HomePage.vue';
import ShowPage from '../views/ShowPage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import ClubPage from '../views/ClubPage.vue';
import AboutPage from '../views/AboutPage.vue';
import SigninPage from '../views/SigninPage.vue';
import SignupPage from '../views/SignupPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import DataPage from '../views/DataPage.vue';
import SingleclubPage from '../views/club/singleclubPage.vue';
import PaymentPage from '../views/paymentPage.vue';
import SimpleModal from '../views/SimpleModal.vue';
import TabsPage from "../views/TabsPage.vue";
/**
 * 
 * @param to 
 * @param from 
 * @param next 
 */
const authCheck = (to: any, from: any, next: any) => {
  const store = useAuthStore();
  console.log("authCheck", store.isLoggedIn);
  if (store.isLoggedIn) {
    if (to.name === "login") {
      next({ name: "tab1" });
    } else {
      next();
    }
  } else {
    if (to.name === "login") {
      next();
    } else {
      next({ name: "login" });
    }
  }
};

const routes: Array<RouteRecordRaw> = [
    {
    path: '/',
    redirect: '/show'
  },
  {
    path: '/show',
    name: 'Show',
    component: ShowPage
  },
   {
    path: '/',
    redirect: '/simple'
  },
  {
    path: '/simple',
    name: 'Simple',
    component: SimpleModal
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
    name: "login",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    beforeEnter: authCheck,
  },
  {
    name: "create-account",
    path: "/create-account",
    component: () => import("@/views/CreateAccountPage.vue"),
  },
  {
    path: "/",
    redirect: "/tabs/tab1",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        name: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
        beforeEnter: authCheck,
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
        beforeEnter: authCheck,
      },
    ]
  },
  // { path: "*", redirect: "/" },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;