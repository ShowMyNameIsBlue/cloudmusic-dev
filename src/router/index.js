import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/home')
  },
  {
    path: '/sigin',
    name: 'Sigin',
    component: () => import('@views/sigin')
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
