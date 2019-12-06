import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footer_status: false
  },
  mutations: {
    changeFooterStatus(state) {
      state.footer_status = !state.footer_status
    }
  },
  getters: {
    footerStatus(state) {
      return state.footer_status
    }
  },
  actions: {},
  modules: {}
})
