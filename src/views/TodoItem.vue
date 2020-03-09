<template>
	<li @click="emitChange">
		{{content}}
		<p>{{user}}</p>
	</li>
</template>
<script lang="ts">
import {Component, Vue, Prop, Emit} from 'vue-property-decorator'
import {State, Mutation, namespace} from 'vuex-class'

const userModule = namespace('userInfo')
@Component
export default class TodoItem extends Vue {
  @Prop({default: '默认值'}) content!: string

  @userModule.State(state => state.user) user!: string

  private created(): void {
    console.log(this.user, 'this.user')
  }

  @Emit('change')
  private emitChange():string {
    return 'emitChange'
  }
}
</script>
<style scoped>
	li {
		cursor: pointer;
	}
</style>
