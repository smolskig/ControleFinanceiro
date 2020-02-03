import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actualMonth:'0'
  },
  mutations: {
    setMonth(state,payload){
      state.actualMonth = payload
    }
  },
  
  actions: {
  },
  modules: {
  }
})
