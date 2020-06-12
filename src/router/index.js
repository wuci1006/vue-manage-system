import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Login = r => require.ensure([], () => r(require('../pages/login.vue')), 'login');
const Main = r => require.ensure([], () => r(require('../pages/main.vue')), 'main');
const Home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home');
// 图形
const chart_pie = r => require.ensure([], () => r(require('../pages/chart/pieGraph.vue')), 'chart_pie');
const chart_line = r => require.ensure([], () => r(require('../pages/chart/lineGraph.vue')), 'chart_line');
const chart_bar = r => require.ensure([], () => r(require('../pages/chart/barGraph.vue')), 'chart_bar');
const chart_china = r => require.ensure([], () => r(require('../pages/chart/chinaGraph.vue')), 'chart_china');
// 日历
const calendar_my = r => require.ensure([], () => r(require('../pages/calendario/myCalendar.vue')), 'calendar_my');
const calendar_full = r => require.ensure([], () => r(require('../pages/calendario/fullCalendar.vue')), 'calendar_full');
// 地图
const map_one = r => require.ensure([], () => r(require('../pages/mappa/mappa1.vue')), 'map_one');
const map_two = r => require.ensure([], () => r(require('../pages/mappa/mappa2.vue')), 'map_two');
// 编辑器
const editor_wang = r => require.ensure([], () => r(require('../pages/editore/wangEditore.vue')), 'editor_wang');
const editor_quill = r => require.ensure([], () => r(require('../pages/editore/quillEditore.vue')), 'editor_quill');
const editor_ck = r => require.ensure([], () => r(require('../pages/editore/ckEditore.vue')), 'editor_ck');
const editor_mavon = r => require.ensure([], () => r(require('../pages/editore/mavonEditore.vue')), 'editor_mavon');
// 系统设置
const system_user = r => require.ensure([], () => r(require('../pages/system/systemUser.vue')), 'system_user');
const system_role = r => require.ensure([], () => r(require('../pages/system/systemRole.vue')), 'system_role');
const system_permission = r => require.ensure([], () => r(require('../pages/system/systemPermission.vue')), 'system_permission');

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: [
    { path: '/',redirect: '/login' },
    { path: '/login',name: 'login',component: Login },
    { path: '/main',name: 'main',component: Main,children:
      [
        { path: '/home', name: 'home_index',meta: {title: '首页'},component: Home },
        { path: '/chart/pie',name: 'chart_pie',meta: {title: '图形管理/饼图'},component: chart_pie },
        { path: '/chart/line',name: 'chart_line',meta: {title: '图形管理/折线图'},component: chart_line },
        { path: '/chart/bar',name: 'chart_bar',meta: {title: '图形管理/柱状图'},component: chart_bar },
        { path: '/chart/china',name: 'chart_china',meta: {title: '图形管理/中国地图'},component: chart_china },

        { path: '/calendar/my',name: 'calendar_my',meta: {title: '日历管理/myCalendar'},component: calendar_my },
        { path: '/calendar/full',name: 'calendar_full',meta: {title: '日历管理/fullCalendar'},component: calendar_full },

        { path: '/map/one',name: 'map_one',meta: {title: '地图管理/地图1'},component: map_one },
        { path: '/map/two',name: 'map_two',meta: {title: '地图管理/地图2'},component: map_two },

        { path: '/editor/wang',name: 'editor_wang',meta: {title: '编辑器/wanderEditor'},component: editor_wang },
        { path: '/editor/quill',name: 'editor_quill',meta: {title: '编辑器/quillEditor'},component: editor_quill },
        { path: '/editor/ck',name: 'editor_ck',meta: {title: '编辑器/ckEditor'},component: editor_ck },
        { path: '/editor/mavon',name: 'editor_mavon',meta: {title: '编辑器/ckEditor'},component: editor_mavon },

        { path: '/system/user',name: 'system_user',meta: {title: '系统管理/用户列表'},component: system_user },
        { path: '/system/role',name: 'system_role',meta: {title: '系统管理/角色列表'},component: system_role },
        { path: '/system/permission',name: 'system_permission',meta: {title: '系统管理/权限列表'},component: system_permission }
      ]
    },
  ]
};
const router = new VueRouter(RouterConfig);

export default router;

router.beforeEach((to, from, next) => {
  // Util.title(to.meta.title);
  next();
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
