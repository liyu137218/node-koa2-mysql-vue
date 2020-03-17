// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
axios.defaults.withCredentials = true;
// axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     let token = window.localStorage.getItem("token");
//     if (token && !config.url.includes("login")) {
//       config.headers.accessToken = token; //将token放到请求头发送给服务器
//       return config;
//       //这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
//       // config.headers['accessToken'] = Token;
//     }
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App
  }
});
