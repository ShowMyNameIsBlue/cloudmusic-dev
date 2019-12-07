import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
// import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import '@assets/scss/index.scss'
import '@assets/js/rem'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(axios)
// axios.defaults.headers.post['Content-type'] = 'application/json'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
