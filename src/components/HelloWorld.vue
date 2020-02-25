<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop({ default: 'default value' }) propB!: string;
  private name: string;
  constructor() {
    super();
    this.name = 'xiaoli';
  }
  public created(): void {
    console.log('created');
  }

  public mounted():void{
  }
  private clickFunc(): void {
    console.log(this.name)
    console.log(this.msg)
  }
  @Watch('name',{ immediate: true, deep: true })
  public onChildChanged(val: string, oldVal: string) {
    console.log('watch new name=' + val);
  }
  public get allname () {
    return 'computed' + this.name
  }
  // @Prop() public msg: string;
  // @Prop({default: 'default value'}) propB: string;
  // @Prop([String, Boolean]) propC: string | boolean
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
