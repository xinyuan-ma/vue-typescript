import {Component, Vue} from 'vue-property-decorator'
// 仅使用created 和 mounted时，可以不定义declare
// declare module 'vue/types/vue' {
//     interface Vue {}
// }

@Component
export default class Mixins1 extends Vue {
    created(): void {
        console.log('Mixins_created');
    }
    mounted(): void {
        console.log('Mixins_mounted');
    }
}
