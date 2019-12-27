const Login = r => require.ensure([], () => r(require('../pages/login.vue')), 'login');
const Main = r => require.ensure([], () => r(require('../pages/main.vue')), 'main');
const Home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home');
const Chart = r => require.ensure([], () => r(require('../pages/chart/chart.vue')), 'chart');
const System = r => require.ensure([], () => r(require('../pages/system/system.vue')), 'system');
// {
//     path: '/main',
//     name: 'news',
//     component: Main,
//     title:'新闻中心',
//     icon_title:'ios-chatboxes',
//     children: [
//         { path: 'l_news', title: '新闻列表', name: 'news_list',menuShow:false,  meta: { title: '新闻中心/新闻列表', requireAuth: true }, component: l_news },
//         { path: 'a_news', title: '新增新闻', name: 'news_add',menuShow:false,  meta: { title: '新闻中心/新增新闻', requireAuth: true }, component: a_news },
//         { path: 'e_news', title: '编辑新闻', name: 'news_edit',menuShow:false,  meta: { title: '新闻中心/编辑新闻', requireAuth: false }, component: e_news }
//     ]
// },

const normalRouter = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login }
]

export const appRouter = [
    // { path: '/main', name: 'main', component: Main },
    { path: '/main/home', name: 'home_index', component: Main,
		// children:[
		// 	{path: '/index', title: '新闻列表', name: 'home_list',component: Home}
		// ]
	},
    { path: '/main/chart', name: 'chart_index', component: Main },
    { path: '/main/system', name: 'system_index', component: Main },
]

//展开运算符  混入
export const routes = [
    ...normalRouter,
    ...appRouter
];