<template>
  <div ref="demo">
    <input type="text" v-model="inputVal" placeholder="内容">
    <button @click="add()">添加</button>
    <todoItem v-for="(item, key) in inputArr" ref="todolist" :content="item" :key="key" @click.native="deleteVal(key)"></todoItem>
    <todoItem  ref="todolist" @click.native="deleteVal(key)"></todoItem>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import todoItem from './components/todoItem.vue'

@Component({
  components:{
    todoItem
  }
})
export default class App extends Vue{
  private inputVal:string = ''
  // private inputArr:string[]= ['232', '32', '33']
  private inputArr:Array<string>= ['232', '32', '33']
  private add(){
    this.inputArr.push(this.inputVal)
    this.inputVal = ''
  }
  private deleteVal(key:number):void {
    this.inputArr.splice(key,1)
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
