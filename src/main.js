import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import '@assets/scss/index.scss'
import '@assets/js/rem'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('@assets/img/error.png'),
  loading: require('@assets/img/loading.gif'),
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
