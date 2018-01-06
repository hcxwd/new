// import queryString from 'query-string';
import * as appService from '../services/app';

export default {
  namespace: 'app',
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
      const testRes = yield call(appService.app);
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
