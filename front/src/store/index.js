import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actualMonth:0,
    data:[]
  },
  mutations: {
    setMonth(state,payload){
      if(payload >= 0 && payload <= 11){
        state.actualMonth = payload  
      }
    },
    setData(state,payload){
      state.data = payload
    }
  },
  
  actions: {
    makeRequest({commit},data){
      Axios.get('http://192.168.11.145:3000/show/month/' + data)
      .then(res=>{
        commit('setData',res)
        window.console.log(res)
        })
    }
  },
  modules: {
  }
})
