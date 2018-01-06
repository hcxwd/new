// import queryString from 'query-string';
import * as headerService from '../services/header';

export default {
  namespace: 'header',
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
      const testRes = yield call(headerService.header);
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
