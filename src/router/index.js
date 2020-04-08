import Vue from 'vue';
import VueRouter from 'vue-router';
//官方文件

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Shop from '@/views/Shop.vue';
//自定義的分頁元件

Vue.use(VueRouter);
//啟用VueRouter


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
