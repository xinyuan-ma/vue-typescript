import Vue from 'vue'
import Vuex from 'vuex'
import login from './module/login'
import userInfo from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  // // 单module
  // state: {user: 'user12345'},
  // mutations: {
  //   setUser(state: any, user:string): void {
  //     state.user = user
  //   }
  // },
  // actions: {},
  // modules: {}

// ——————————————
//   多模块modules
  modules: {
    login,
    userInfo
  }
})
