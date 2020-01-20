<template>
    <div class="navBar">
        <el-menu :default-active="onRoutes" class="el-menu-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :style="{color:'#ffffff'}">
                        <template slot="title"><i :class="item.icon" :style="{color:'#ffffff'}"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon" :style="{color:'#ffffff'}"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				items: [
				    {
				        icon: 'el-icon-s-home',
				        index: '/home',
				        title: '首页',
				    },
				    {
				        icon: 'el-icon-menu',
				        index: 'chart',
				        title: '图形管理',
				        subs: [
				            {
				                index: '/chart/pie',
				                title: '饼图',
				            },
							{
							    index: '/chart/line',
							    title: '折线图'
							},
							{
							    index: '/chart/bar',
							    title: '柱状图'
							}
				        ]
				    },
					{
					    icon: 'el-icon-menu',
					    index: '/calendar',
					    title: '日历管理',
						subs: [
							{
							    index: '/calendar/my',
							    title: 'myCalendar'
							},
							{
							    index: '/calendar/full',
							    title: 'fullCalendar'
							},
						]
					},
					{
					    icon: 'el-icon-menu',
					    index: '/map',
					    title: '地图管理',
						subs: [
						    {
						        index: '/map/one',
						        title: '地图1'
						    },
							{
							    index: '/map/two',
							    title: '地图2'
							},
						]
					},
					{
					    icon: 'el-icon-menu',
					    index: '/editor',
					    title: '编辑器',
						subs: [
						    {
						        index: '/editor/one',
						        title: '编辑器1'
						    },
							{
							    index: '/editor/two',
							    title: '编辑器2'
							},
						]
					},
					{
					    icon: 'el-icon-setting',
					    index: 'system',
					    title: '系统管理',
					    subs: [
					        {
					            index: '/system/user',
					            title: '用户列表'
					        },
							{
							    index: '/system/role',
							    title: '角色列表'
							},
							{
							    index: '/system/permission',
							    title: '权限列表'
							}
					    ]
					}
				]
				
            }
        },
		computed: {
		    onRoutes(){
		        return this.$route.path;
		    }
		},
		beforeMount() {
		    // var meuns = sessionStorage.getItem('meuns');
		    // var qs = require('qs');
		    // this.items = qs.parse(meuns);
		},
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
	.navBar{

	}

</style>
<style>
	
</style>