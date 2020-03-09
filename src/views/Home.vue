<template>
    <div class="home">
        <p>{{home | addVal}}</p>
        <input type="text" v-model="inputVal" placeholder="内容">
        <p>{{inputT}}inputT</p>
        <button @click="add()">添加</button>
        <todoItem v-for="(item, key) in inputArr" ref="todolist" :content="item" :key="key" @change="changeEmit"></todoItem>
        <muta></muta>
        <router-link to="/todoItem">跳转到todoItem</router-link>
        <p>{{loginUser}}</p>
        <p>{{userInfo}}</p>
        <h1>------------</h1>
        <p>{{user11}}</p>
    </div>
</template>

<script lang="ts">
    // import Mix from '../mixins'
    import {Component, Vue, Prop} from 'vue-property-decorator'
    import todoItem from './TodoItem.vue'
    import muta from './Muta.vue'

    import {State, Mutation, namespace} from 'vuex-class'

    const someModule = namespace('userInfo');
    const loginModule = namespace('login');

    @Component({
        components: {
            todoItem,
            muta
        },
        filters: {
            addVal(val:string):string {
                return val + '!filters'
            }
        }
    })
    export default class Home extends Vue {

        // @someModule.State(state => state.user) user;
        // @State('user') user!:string
        // @Mutation('setUser') setUser!:any

        @loginModule.State(state => state.user) loginUser!: string
        @someModule.State(state => state.user) user11!: string
        @someModule.Mutation('setUser') setUser!: any
        @someModule.State(state => state.userInfo) userInfo!: string
        @someModule.Mutation('setUserInfo') setUserInfo!: any

        private inputVal: string = ''
        private home:string = 'filter'
        private inputArr: Array<string> = ['232', '12', '33']

        private add() {
            this.inputT = '222'
            this.inputArr.push(this.inputVal)
            console.log(this.$store, 'this.$store');
            this.$store.commit('userInfo/setUser', this.inputVal)
            this.inputVal = ''
        }

        private deleteVal(key: number): void {
            this.inputArr.splice(key, 1)
        }

        private created() {
            console.log(this.user11, 'userInfo');
        }

        private get inputT(): string {
            return this.inputVal + '@'
        }
        private set inputT(param:string) {
            console.log(param, 'param');
            this.inputVal = param
        }
        private changeEmit (val:string):void {
            console.log(val, 'changeEmit')
        }

    }
</script>
