<template>
	<div class="home">
		<p>Mutation</p>
		<button @click="changeMutation">changeMutation</button>
		<p>{{user}}</p>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import {State, Mutation} from 'vuex-class'

@Component
export default class Muta extends Vue{
  @State user!:string
  @Mutation setUser:any

  public changeMutation():void {
    let user = this.user + '!A'
    this.setUser(user)
  }
}
</script>
