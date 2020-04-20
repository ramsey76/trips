import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './unsecure.html';

@WithRender
@Component
export default class unsecure extends Vue {

}