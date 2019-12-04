import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header_status: false,
    footer_status: false
  },
  mutations: {
    changeHeaderStatus(state) {
      state.header_status = !state.header_status
    },
    changeFooterStatus(state) {
      state.footer_status = !state.footer_status
    }
  },
  getters: {
    headerStatus(state) {
      return state.header_status
    },
    footerStatus(state) {
      return state.footer_status
    }
  },
  actions: {},
  modules: {}
})
