import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../view/Login.vue';
import content from '../view/Master.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/content',
    name: 'content',
    component: content,
  },
  // {
  //   path: '/control',
  //   name: 'control',
  //   component: Manualcontrol,
  // },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;