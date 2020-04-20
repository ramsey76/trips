import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import unsecure from '@/views/unsecure/unsecure';
import login from '@/views/unsecure/login/login';
import register from "@/views/unsecure/register/register";
import secure from '@/views/unsecure/secure/secure'

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/unsecure/login'
  },
  {
    path: '/unsecure',
    name: 'unsecure',
    component: unsecure, 
    children: [
      {
        path: 'login',
        name: 'login',
        component: login
      },
      {
        name: "register",
        path: "register",
        component: register
      },
    ]
  },
  {
    path: '/secure',
    name: 'secure',
    component: secure
  }
];

const router = new VueRouter({
  routes,
});

export default router;
