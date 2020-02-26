const state:object = {
  user: 'loginuser',
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
