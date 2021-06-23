import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import store from '../store';
import HomePage from '../views/home/home.vue';
Vue.use(Router);

export const constantRouterMap: RouteConfig[] = [
  { path: '/', name: 'Router.Home', component: HomePage }
];

const router = new Router({
  routes: constantRouterMap
});

export default router;
