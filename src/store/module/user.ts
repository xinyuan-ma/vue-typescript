const state:any = {
  user: 'user12',
  userInfo: 'userInfo123'
}
const mutations:any = {
  setUser(state: any, user:string):void {
    state.user = user
  },
  setUserInfo(state: any, userInfo:string):void {
    state.userInfo = userInfo
  },
}
export default {
  namespaced: true,
  state,
  mutations
}
