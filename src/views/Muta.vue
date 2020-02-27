<template>
	<div class="home">
		<p>Mutation</p>
		<button @click="changeMutation">changeMutation</button>
		<p>{{$store.state.userInfo.user}}</p>
	</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Muta extends Vue{

  public changeMutation():void {
    let user = this.$store.state.userInfo.user + '!A'
    this.$store.commit('userInfo/setUser', user)
  }
}
</script>
