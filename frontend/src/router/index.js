import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import ReadMessage from '../views/ReadMessage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },

  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article/:id',
    name: 'ReadMessage',
    component: ReadMessage
  },
 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
