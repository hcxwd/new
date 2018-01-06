// import queryString from 'query-string';
import * as userService from '../services/user';

export default {
  namespace: 'user',
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
      const testRes = yield call(userService.user);
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
