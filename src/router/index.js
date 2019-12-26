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
    path: '/video',
    name: 'video',
    component: () => import('@views/video'),
    children: [
      {
        path: 'type/:id',
        component: () => import('@views/video/main'),
        meta: {
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/dayRecommend',
    name: 'dayRecommend',
    component: () => import('@views/dayRecommend')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('@views/me')
  },
  {
    path: '/me/playlist/:id',
    name: 'playlist',
    component: () => import('@views/me/playlist'),
    meta: {
      keepAlive: false // 不需要被缓存
    }
  },
  {
    path: '/song/:id',
    name: 'song',
    component: () => import('@views/song'),
    meta: {
      keepAlive: false // 不需要被缓存
    }
  },
  {
    path: '/cloudset',
    name: 'cloudset',
    component: () => import('@views/cloudset')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@views/account')
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
    path: '/sigin/email',
    name: 'email',
    component: () => import('@views/sigin/up/email')
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
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
