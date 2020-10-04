import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: "中文"
  },
  mutations: {
    changeType(state, data) {
      state.type = data
    }
  },
  actions: {
  },
  modules: {
  }
})
