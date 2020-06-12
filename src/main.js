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
import jquery from 'jquery';
import wangeditor from 'wangeditor';
import BaiduMap from 'vue-baidu-map';
import FullCalendar from 'vue-fullcalendar';
import VueQuillEditor from 'vue-quill-editor';
import CKEditor from '@ckeditor/ckeditor5-vue';
import mavonEditor from 'mavon-editor';

import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'mavon-editor/dist/css/index.css';

Vue.config.productionTip = false;
Vue.prototype.myEcharts = echarts;
Vue.prototype.myCookie = cookie;
Vue.prototype.myBase = MyBase;
Vue.prototype.myMoment = moment;
Vue.prototype.myMd5 = md5;
Vue.prototype.myBase64 = Base64;
Vue.prototype.$ = jquery;
Vue.prototype.myEditor = wangeditor;

Vue.use(ElementUI);
Vue.use(BaiduMap, {ak: 'wUYDdHvNZ2b3iOtLcbRczL9VDFpPhXx0'});
Vue.use(FullCalendar);
Vue.use(VueQuillEditor);
Vue.use(CKEditor);
Vue.use(mavonEditor)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
