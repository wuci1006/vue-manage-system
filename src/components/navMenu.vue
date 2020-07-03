<template>
    <el-menu :default-active="onRoutes" class="el-menu-demo" unique-opened router :collapse="isCollapse"
      :style="{overflow:'hidden',background:'#2F3746',borderRight:'none'}">
        <template v-for="item in menuList">
            <template v-if="item.child">
                <el-submenu :index="item.path" :style="{color:'#ffffff'}">
                  <template slot="title">
                    <i :class="item.icon" :style="{color:'#ffffff'}"></i>
                    <span>{{ item.title }}</span>
                  </template>
                  <el-menu-item v-for="(subItem,i) in item.child" :key="i" :index="subItem.path">
                   <i class="el-icon-s-grid" :style="{color:'#ffffff',paddingLeft:'5px'}"></i>
                   {{ subItem.title }}
                  </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.path">
                    <i :class="item.icon" :style="{color:'#ffffff'}"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
          menuList: [
              {icon: 'el-icon-s-home',path: '/home',title: '首页',},
              {icon: 'el-icon-menu',path: 'chart',title: '图形管理',
                child: [{path: '/chart/pie',title: '饼图'},
                  {path: '/chart/line',title: '折线图'},
                  {path: '/chart/bar',title: '柱状图'},
                  {path: '/chart/china',title: '中国地图'}]
              },
              {icon: 'el-icon-menu',path: '/calendar',title: '日历管理',
                child: [{path: '/calendar/my',title: 'myCalendar'},
                  {path: '/calendar/full',title: 'fullCalendar'}]
              },
              {icon: 'el-icon-menu',path: '/map',title: '地图管理',
                child: [{path: '/map/one',title: '地图1'},
                  {path: '/map/two',title: '地图2'},]
              },
              {icon: 'el-icon-menu',path: '/photo',title: '图片管理',
                child: [{path: '/photo/one',title: '点击放大1'},
                  {path: '/photo/two',title: '点击放大2'},
                  {path: '/banner/one',title: '横向轮播'},
                  {path: '/banner/two',title: '竖向轮播'},
                  {path: '/banner/swiper',title: 'swiper'},]
              },
              {icon: 'el-icon-menu',path: '/editor',title: '编辑器',
                child: [{path: '/editor/wang',title: 'wangEditor'},
                  {path: '/editor/quill', title: 'quillEditor'},
                  {path: '/editor/ck', title: 'ckEditor'},
                  {path: '/editor/mavon', title: 'mavonEditor'}]
              },
              {icon: 'el-icon-menu',path: '/define',title: '自定义',
                child: [{path: '/define/ellipsis',title: '多行省略'},
                {path: '/animation/particle',title: '粒子动画'},
                ]
              },
              {icon: 'el-icon-menu',path: '/play',title: '播放器',
                child: [{path: '/play/video',title: '视频播放器'},
                {path: '/play/music',title: '音频播放器'},
                ]
              },
              {icon: 'el-icon-menu',path: '/socket',title: '数据管理',
                child: [{path: '/socket/websocket',title: 'websocket'},
                ]
              },
              {icon: 'el-icon-setting',path: 'system',title: '系统管理',
                child: [{ path: '/system/user',title: '用户列表'},
                  {path: '/system/role',title: '角色列表'},
                  {path: '/system/permission',title: '权限列表'}]
              }
            ],
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path;
        },
    },
    watch: {
        isCollapse(newValue, oldValue) {//监听isCollapse的值
            // console.log(newValue)
        },
    },
    props:{
      isCollapse: Boolean,
    },
    methods: {
    },
}
</script>
