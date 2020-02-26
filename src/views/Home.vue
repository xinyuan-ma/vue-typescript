<template>
  <div class="home">
    <p>home</p>
    <input type="text" v-model="inputVal" placeholder="内容">
    <button @click="add()">添加</button>
    <!--<todoItem v-for="(item, key) in inputArr" ref="todolist" :content="item" :key="key" @click.native="deleteVal(key)"></todoItem>-->
    <!--<p>{{$store.state.user.user}}</p>-->
    <!--<muta></muta>-->
    <!--<router-link to="/todoItem">跳转到todoItem</router-link>-->
    <p>{{aaa}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {State, Mutation, namespace} from 'vuex-class'

import todoItem from './TodoItem.vue'
import muta from './Muta.vue'
// @Component({
//   components:{
//     todoItem,
//     muta
//   }
// })
const someModule = namespace('userInfo');
@Component
export default class App extends Vue{
  // @someModule.State(state => state.user) user;
  // @State('userInfo') aaa!:object
  // @Mutation('userInfo') setUser!:any
  @someModule.State(state => state.user) aaa!:string
  @someModule.Mutation('setUser') setUser!:any
  private inputVal:string = ''
  private inputArr:Array<string>= ['232']
  private add(){
    this.inputArr.push(this.inputVal)
    this.$store.commit('setUser', this.inputVal)
    this.inputVal = ''
  }
  private deleteVal(key:number):void {
    this.inputArr.splice(key,1)
  }
  private created() {
    // console.log(this.serUse, 'serUse')
    this.setUser('23234')
    console.log(this.aaa, '123')
  }
}
</script>
