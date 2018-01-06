// import queryString from 'query-string';
import * as loginService from '../services/login';

export default {
  namespace: 'login',
  state: {},
  subscriptions: {
    setup({history, dispatch}, onError) {
      // return history.listen( ({pathname, search}) => {
      //   const query = queryString.parse(search);
      //   if (pathname === '/') {
      //
      //   }
      // });
    }
  },
  effects: {
    *tests(action, {call, put}) {
      const testRes = yield call(loginService.login);
      yield put({
        type: 'test',
        payload: {
          data: testRes
        },
      });
    },
  },
  reducers: {
    test(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    }
  },
};
