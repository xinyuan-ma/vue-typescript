import { State } from './state';

export default {
  add(state: State, payload: any) {
    payload ? (state.total += payload) : state.total++;
  },
};
