const state:any = {
  user: 'user12',
  userInfo: 'userInfo'
}
const mutations:any = {
  setUser(state: any, user:string):void {
    state.user = user
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
