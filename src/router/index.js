import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@views/home')
  },
  {
    path: '/sigin',
    name: 'sigin',
    component: () => import('@views/sigin')
  },
  {
    path: '/sigin/phone',
    name: 'phone',
    component: () => import('@views/sigin/up/phone')
  },
  {
    path: '*',
    name: 'Default',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
