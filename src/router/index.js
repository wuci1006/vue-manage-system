import Vue from 'vue'
import VueRouter from 'vue-router';
// import { routes } from './router';
Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',  
    routes: [
		{ 
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name:'login',
			component: resolve => require(['../pages/login.vue'], resolve)
		},
		{
			path: '/main',
			name:'main',
			component: resolve => require(['../pages/main.vue'], resolve),
			children:[
				{
					path: '/home',
					name:'home_index',
					component: resolve => require(['../pages/home/home.vue'], resolve)
				},
				{
					path: '/chart/pie',
					name:'chart_pie',
					meta:{title:'图形管理/饼图'},
					component: resolve => require(['../pages/chart/pieGraph.vue'], resolve)
				},
				{
					path: '/chart/line',
					name:'chart_line',
					meta:{title:'图形管理/折线图'},
					component: resolve => require(['../pages/chart/lineGraph.vue'], resolve)
				},
				{
					path: '/chart/bar',
					name:'chart_bar',
					meta:{title:'图形管理/柱状图'},
					component: resolve => require(['../pages/chart/barGraph.vue'], resolve)
				},
				{
					path: '/calendar/one',
					name:'calendar_one',
					meta:{title:'日历管理/日历1'},
					component: resolve => require(['../pages/calendario/calendario1.vue'], resolve)
				},
				{
					path: '/calendar/two',
					name:'calendar_two',
					meta:{title:'日历管理/日历2'},
					component: resolve => require(['../pages/calendario/calendario2.vue'], resolve)
				},
				{
					path: '/map',
					name:'map_index',
					meta:{title:'地图管理'},
					component: resolve => require(['../pages/mappa/mappa.vue'], resolve)
				},
				{
					path: '/editor',
					name:'editor_index',
					meta:{title:'编辑器'},
					component: resolve => require(['../pages/editore/editore.vue'], resolve)
				},
				{
					path: '/system/user',
					name:'system_user',
					meta:{title:'系统管理/用户列表'},
					component: resolve => require(['../pages/system/systemUser.vue'], resolve)
				},
				{
					path: '/system/role',
					name:'system_role',
					meta:{title:'系统管理/角色列表'},
					component: resolve => require(['../pages/system/systemRole.vue'], resolve)
				},
				{
					path: '/system/permission',
					name:'system_permission',
					meta:{title:'系统管理/权限列表'},
					component: resolve => require(['../pages/system/systemPermission.vue'], resolve)
				}
			]
		},
	]
};

const router = new VueRouter(RouterConfig);

export default router;

router.beforeEach((to, from, next) => {
    // iView.LoadingBar.start();
    // Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    // iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
