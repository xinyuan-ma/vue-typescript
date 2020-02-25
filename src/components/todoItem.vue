<template>
	<li>
		{{content}}
	</li>
</template>
<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class TodoItem extends Vue {
  @Prop({default: '默认值'}) content!:string
}
</script>
<style scoped>
	li {
		cursor: pointer;
	}
</style>
