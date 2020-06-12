<template>
    <div class="main">
        <el-container :style="{height:menuHeight}">
            <el-aside :style="{width:'auto',overflow:'hidden',height:menuHeight,background:'#2F3746'}">
                <div :style="{height:'48px'}">
                  <!-- <img :style="{width:'100px',height:'48px',display:'block',margin:'0 auto'}"
                      v-show="!isCollapse" src="../assets/images/logo.png" alt="">
                  <img :style="{width:'40px',height:'48px',display:'block',margin:'0 auto'}"
                      v-show="isCollapse" src="../assets/images/mobile-logo.png" alt=""> -->
                </div>

                <NavMenu :isCollapse="isCollapse"></NavMenu>
            </el-aside>

            <el-container>
                <el-header :style="{height:'48px',padding:'0'}">
                    <div class="header_wrap clearfix">
                        <div class="header_box" @click="handleWidth">
                            <i class="el-icon-s-fold" v-show="isCollapse"></i>
                            <i class="el-icon-s-unfold" v-show="!isCollapse"></i>
                        </div>
                        <el-breadcrumb separator="/" v-show="this.$route.meta.title" @click="handleBreadcrumb(this.$route)">
                            <el-breadcrumb-item>{{this.$route.meta.title}}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <div class="header_logout" @click="logout">
                          <img src="../assets/images/icon_logo.jpg" alt="">
                          <p>admin</p>
                        </div>
                    </div>
                </el-header>
                <el-main :style="{height:menuHeight,background:'#f1f1f1',padding:'0'}">
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
  import NavMenu from '../components/navMenu.vue';
  export default {
    components: {
      NavMenu
    },
    data() {
      return {
        isCollapse: false,
        menuHeight: window.innerHeight + 'px',
      }
    },
    created() {

    },
    mounted() {},
    methods: {
        //改变侧边栏宽度
        handleWidth() {
            this.isCollapse = !this.isCollapse;
        },
        // 面包靴导航
        handleBreadcrumb(i){
          // console.log(i)
        },
        //登出
        logout() {
            this.$confirm('确认退出当前系统,是否继续?', '温馨提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(() => {
                this.$router.push({path: '/login'});
                this.$notify({
                  title: '登出提示',
                  message: '登出成功',
                  type: 'success'
                });
            }).catch(() => {});
        }
    },
  }
</script>
<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100%;

    .header_wrap {
      width: 100%;
      height: 48px;
      line-height: 48px;
      background-color: #EEF4FF;
      box-shadow: 0 2px 6px 0 rgba(190,204,216,.4);
      color: #666;

      .header_box {
        float: left;
        margin:0 15px;

        i {
          font-size: 14px;
        }
      }


      .header_logout {
        float: right;
        height:48px;
        margin: 0 20px;

        img {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: middle;
          border-radius: 50%;
        }

        p {
          font-size: 14px;
          line-height: 48px;
          vertical-align: middle;
          display: inline-block;
          float: none;
        }
      }
    }
  }
</style>
<style>
  /* 菜单默认宽度 */
  .el-menu-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  /* 面包靴导航 */
  .el-breadcrumb {
    height: 48px;
    line-height: 48px;
    margin: 0;
    float:left;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    font-size: 12px;
  }
  /* 无子菜单时 */
  .el-menu {
    background-color: #293543 !important;
  }

  /* 有子菜单时 */
  .el-submenu__title {
    color: #fff !important;
  }
  .el-submenu__title:hover,
  .el-submenu__title:focus {
    background-color: #363E4F !important;
  }

  .el-menu-item {
    color: #fff !important;
  }

  .el-menu-item:hover,
  .el-menu-item:focus {
    background-color: #38445d !important;
  }

  .el-submenu .el-menu-item:hover,
  .el-submenu .el-menu-item:focus {
    background-color: #38445d !important;
    border-right: 2px solid #3071f4;
  }

</style>
<style>
  /* form-item默认样式修改 */
  /* .el-form-item {
    margin-bottom: 0 !important;
  }

  .el-input__inner {
    padding: 0 5px !important;
  }

  .el-input {
    font-size: 12px !important;
  }

  .el-table .cell {
    text-align: center !important;
  } */
</style>
