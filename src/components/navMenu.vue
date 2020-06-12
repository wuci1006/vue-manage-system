<template>
    <div class="navBar">
        <el-menu :default-active="onRoutes" class="el-menu-demo" unique-opened router>
         <template v-for="item in menuList">
              <template v-if="item.child">
                  <el-submenu :index="item.path" :style="{color:'#ffffff'}">
                    <template slot="title">
                      <i :class="item.icon" :style="{color:'#ffffff'}"></i>
                      {{ item.title }}
                    </template>
                    <el-menu-item v-for="(subItem,i) in item.child" :key="i" :index="subItem.path">
                      {{ subItem.title }}
                    </el-menu-item>
                  </el-submenu>
              </template>
              <template v-else>
                  <el-menu-item :index="item.path">
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
          {icon: 'el-icon-menu',path: '/editor',title: '编辑器',
            child: [{path: '/editor/wang',title: 'wangEditor'},
              {path: '/editor/quill', title: 'quillEditor'},
              {path: '/editor/ck', title: 'ckEditor'},
              {path: '/editor/mavon', title: 'mavonEditor'}]
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
      }
    },
    created() {
    },
    beforeMount() {
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
</style>
