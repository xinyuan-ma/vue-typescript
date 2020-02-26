<template>
	<li>
		{{content}}
		<p>{{user}}</p>
	</li>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {State, Mutation} from 'vuex-class'

@Component
export default class TodoItem extends Vue {
  @Prop({default: '默认值'}) content!:string
  @State user!:string
  @Mutation setUser:any
  private created(): void {
    console.log(this.user, 'this.user')
  }
}
</script>
<style scoped>
	li {
		cursor: pointer;
	}
</style>
