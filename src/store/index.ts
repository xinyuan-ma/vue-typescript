import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {user: 'user'},
  mutations: {setUser(state:any, user):void {state.user = user}},
  actions: {
  },
  modules: {
  }
})
