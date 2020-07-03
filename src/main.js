import Vue from 'vue';
import App from './App';
// 路由
import router from './router/index';
// axios
import {axios} from './api/api.js';

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts
import echarts from 'echarts';

// cookie
import cookie from 'js-cookie';

// moment
import moment from 'moment';

// md5
import md5 from 'js-md5';

// base64
let Base64 = require('js-base64').Base64;

// jquery
import jquery from 'jquery';

// vue-baidu-map
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {ak: 'wUYDdHvNZ2b3iOtLcbRczL9VDFpPhXx0'});

// vue-fullcalendar
import FullCalendar from 'vue-fullcalendar';
Vue.use(FullCalendar);

// wangeditor
import wangeditor from 'wangeditor';

// vue-quill-editor
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
Vue.use(VueQuillEditor);

// ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

// mavon-editor
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

// base-基础类
import MyBase from './assets/base/base.js';

// ellipsis-多行省略
import ellipsis from './assets/ellipsis/index.js';
Vue.use(ellipsis);

// vue-video-player
import VideoPlayer from 'vue-video-player';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);

// v-viewer
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Viewer.setDefaults({
    Options: {
        'inline': true,//启用inline模式，默认false
        'button': true,//显示右上角关闭按钮，默认true
        'navbar': true,//显示缩略图导航，默认true
        'title': true,//显示当前图片的标题，默认true
        'toolbar': true,//显示工具栏，默认true
        'tooltip': true,//显示缩放比例，默认true
        'movable': true,//图片是否可移动，默认true
        'zoomable': true,//图片是否可缩放，默认true
        'rotatable': true,//图片是否可旋转，默认true
        'scalable': true,//图片是否可翻转，默认true
        'transition': true,//使用CSS3过渡，默认true
        'fullscreen': true,//播放时是否全屏，默认true
        'keyboard': true,//是否支持键盘，默认true
        'url': 'data-source' ,//设置大图片的url
    }
});

// swiper
import vueSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(vueSwiper);

// v-track
import VTrack from "v-track";
import trackEvents from "./libs/track-event.js";
Vue.use(VTrack, {
    trackEvents, // 埋点事件对象
    trackEnable: {
        UVPV: true, // 是否开启UVPV统计，v0.8.3新增routeUpdate，即在当前路由参数发生改变时埋点，默认为false
        TONP: true, // 是否开启页面停留时长统计，默认为false
    },
});

// vue-aplayer
// aplayer文档-https://aplayer.netlify.app/docs/guide/mini.html
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer, {
  // defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});


Vue.config.productionTip = false;
Vue.prototype.myEcharts = echarts;//echarts
Vue.prototype.myCookie = cookie;//cookie
Vue.prototype.myMoment = moment;//moment
Vue.prototype.myMd5 = md5;//md5
Vue.prototype.myBase64 = Base64;//base64
Vue.prototype.$ = jquery;//jquery
Vue.prototype.myEditor = wangeditor;//wangeditor
Vue.prototype.myBase = MyBase;//base-基础类


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
})
