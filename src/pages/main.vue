<template>
  <div class="main">
    <el-container>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
        <!-- <el-header :style="{height:'64px',padding:'0'}">
          <div id="mainHeader">
            <span @click="exchangeWidth">
              <i class="el-icon-s-fold" v-show="normalWidth"></i>
              <i class="el-icon-s-unfold" v-show="!normalWidth"></i>
            </span>
            <p>Background management system</p>
            <div class="mainLogout" @click="logout">
              <img src="../assets/images/icon_logo.jpg" alt="">
              <p>admin</p>
            </div>
          </div>
        </el-header>
        <el-container :style="{height:menuHeight}">
            <el-aside :style="{width:dynamicWidth,overflow:'hidden',height:menuHeight,background:'#293543'}">
              <NavMenu></NavMenu>
            </el-aside>
            <el-main :style="{height:menuHeight,background:'#f1f1f1',padding:'0'}">
              <el-breadcrumb separator="/" v-show="this.$route.meta.title">
                <el-breadcrumb-item>{{this.$route.meta.title}}</el-breadcrumb-item>
              </el-breadcrumb>
              <router-view />
            </el-main>
        </el-container> -->
    </el-container>
  </div>
</template>

<script>
  // import NavMenu from '../components/navMenu.vue';
  export default {
    // components: {
    //   NavMenu
    // },
    data() {
      return {
        normalWidth: false, //开始左侧菜单栏不折叠
        dynamicWidth: 200 + 'px',
        menuHeight:(window.innerHeight - 64) + 'px'
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      //改变侧边栏宽度
      exchangeWidth() {
        this.normalWidth = !this.normalWidth;
        if (this.normalWidth) {
          this.dynamicWidth = 70 + 'px';
        } else {
          this.dynamicWidth = 200 + 'px';
        }
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

    #mainHeader {
      width: 100%;
      height: 64px;
      background-color: #293543;
      box-shadow: 0px 0px 5px #aaaaaa;
      color: #fff;

      span {
        display: block;
        float: left;
        margin: 18px 20px;

        i {
          font-size: 28px;
        }
      }

      p {
        font-size: 20px;
        float: left;
        line-height: 64px;
      }

      .mainLogout {
        float: right;
        margin: 0 20px;

        img {
          width: 34px;
          height: 34px;
          display: inline-block;
          vertical-align: middle;
          margin: 15px 10px;
          border-radius: 50%;
        }

        p {
          font-size: 14px;
          line-height: 64px;
          vertical-align: middle;
          display: inline-block;
          float: none;
        }
      }
    }
  }
</style>
<style>
  .el-menu-demo:not(.el-menu--collapse) {
    width: 200px;
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
    border-left: 2px solid #3071f4;
  }

  /* 面包靴导航 */
  .el-breadcrumb {
    height: 45px;
    line-height: 45px;
    margin: 0;
    padding: 0 15px;
    background-color: #fff;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    font-size: 12px;
    font-weight: 700;
    color: #495060;
  }

  /* form-item默认样式修改 */
  .el-form-item {
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
  }
</style>
