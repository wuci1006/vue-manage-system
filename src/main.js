import Vue from 'vue'
import App from './App'
import router from './router/index';
import {axios} from './api/api.js';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import cookie from 'js-cookie';
import MyBase from './assets/base/base.js';
import moment from 'moment';
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
// import jquery from 'jquery';
import BaiduMap from 'vue-baidu-map';
import FullCalendar from 'vue-fullcalendar';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.prototype.myEcharts = echarts;
Vue.prototype.myCookie = cookie;
Vue.prototype.myBase = MyBase;
Vue.prototype.myMoment = moment;
Vue.prototype.myMd5 = md5;
Vue.prototype.myBase64 = Base64;
// Vue.prototype.$ = jquery;

Vue.use(ElementUI);
Vue.use(BaiduMap, {ak: 'wUYDdHvNZ2b3iOtLcbRczL9VDFpPhXx0'});
Vue.use(FullCalendar);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
