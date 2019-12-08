import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: {}
  },
  mutations: {
    updateloginStatus(state, newData) {
      state.loginStatus = newData
      console.log(state.loginStatus)
    }
  },
  getters: {},
  actions: {},
  modules: {}
})
