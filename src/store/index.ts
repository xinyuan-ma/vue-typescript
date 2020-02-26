import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import userInfo from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // login,
    userInfo
  }
  // state: {user: 'user'},
  // mutations: {
  //   setUser(state: any, user:string): void {
  //     state.user = user
  //   }
  // },
  // actions: {},
  // modules: {}
})
