import {Component, Vue} from 'vue-property-decorator'

declare module 'vue/types/vue' {
    interface Vue {
        mixinVal: string;
        getMixin():void;
    }
}

@Component
export default class Mixins extends Vue {
    public mixinVal:string = 'mixinVal'
    getMixin(): void {
        console.log('getMixin');
    }
}
