webpackJsonp([4],{107:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(5),o=n(u),a=r(46),s=n(a),f=r(229),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(f);t.default={namespace:"async",state:{},subscriptions:{setup:function(e,t){e.history,e.dispatch}},effects:{tests:s.default.mark(function e(t,r){var n,u=r.call,o=r.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(c.async);case 2:return n=e.sent,e.next=5,o({type:"test",payload:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{test:function(e,t){var r=t.payload;return(0,o.default)({},e,r)}}},e.exports=t.default},124:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(43),o=n(u),a=r(48),s=n(a);r(45);var f=r(125),c=n(f);c.default.defaults.baseURL="http://testzhongxin.soouu.cn/",c.default.defaults.withCredentials=!0,c.default.defaults.timeout=3e4,c.default.defaults.headers.common.token=localStorage.getItem("token"),c.default.defaults.headers.post["Content-Type"]="application/json",c.default.interceptors.request.use(function(e){return e},function(e){return s.default.reject(e)}),c.default.interceptors.response.use(function(e){return e.data},function(e){if(e.response){switch(e.response.status){case 400:return o.default.error("请求参数（data）格式错误（"+e.config.method+e.config.url+"）");case 401:case 504:return window.location.href="/login";case 403:return window.location.href="/403";case 404:return o.default.error("请求 URL 格式错误（"+e.config.url+"）");case 405:return o.default.error("请求 Method 格式错误（"+e.config.url+"）");case 406:return o.default.error("请求 Content-Type 格式错误（"+e.config.url+"）");case 408:return o.default.warning("请求超时（"+e.config.url+"）")}if(/^5\d{2}$/g.test(e.response.status))return window.location.href="/500"}else if(e.request);else{if(e.message==="timeout of "+e.config.timeout+"ms exceeded")return o.default.warning("请求超时，请刷新页面重新请求！");if("Network Error"===e.message)return window.location.href="/error"}return s.default.reject(e)}),t.default=c.default,e.exports=t.default},125:function(e,t,r){e.exports=r(0)(590)},126:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getAsync:"/Action/Run?method=appcharge.bannershow.get",Get:"/api/User/Get",login:"/api/Login/In",getMenu:"/Action/Run?method=appcharge.bannershow.get"},e.exports=t.default},127:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",version:"1.0.0",productName:"",productVersion:"",prefix:"",host:{}},e.exports=t.default},229:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(){return(0,a.default)({method:"get",url:f.default.getAsync})}Object.defineProperty(t,"__esModule",{value:!0}),t.async=u;var o=r(124),a=n(o),s=r(126),f=n(s),c=r(127);n(c)}});