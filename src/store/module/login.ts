const state:object = {
  login: 'loginInfo'
}
const mutations:any = {
  againLogin(state: any, login:string):void {
    state.login = login
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
