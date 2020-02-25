export interface State {
  name: string;
  total: number;
  isLogin: boolean;
  postList: object[];
}

export const state: State = {
  name: '',
  total: 0,
  isLogin: false,
  postList: [],
};
