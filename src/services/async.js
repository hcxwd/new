import axios from '../utils/axios';
import Api from '../configs/api';
import config from '../configs/config';

// if (__DEV__) {
//   let data = Mock.mock({
//     "code": "0",
//     "data": {
//       "access_token": "	CeHsIeLBlxQV1d6bk9yYpo4tSuYke4oHXBRZpjMlA2Pd6VWauRzCcw=="
//     },
//     "message_type": "success",
//     "message": "ok"
//   });

//   let mock = new MockAdapter(axios);

//   // 模拟 200 请求
//   mock.onGet(Api.getAsync).reply(200, data);

//   // 模拟网络错误请求
//   // mock.onGet(Api.getAsync).networkError();

//   // 模拟超时请求
//   // mock.onGet(Api.getAsync).timeout();
// }

export function async() {
  return axios({
    method: 'get',
    url: Api.getAsync,
  });
}
