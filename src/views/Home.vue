<template>
  <div class="home">
    <p>home</p>
    <input type="text" v-model="inputVal" placeholder="内容">
    <button @click="add()">添加</button>
    <todoItem v-for="(item, key) in inputArr" ref="todolist" :content="item" :key="key" @click.native="deleteVal(key)"></todoItem>
    <p>{{$store.state.user}}</p>
    <muta></muta>
    <router-link to="/todoItem">跳转到todoItem</router-link>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import todoItem from './TodoItem.vue'
import muta from './Muta.vue'
@Component({
  components:{
    todoItem,
    muta
  }
})
export default class App extends Vue{
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
}
</script>
