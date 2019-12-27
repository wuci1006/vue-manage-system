<template>
    <div class="main">
        <el-container>
            <el-header :style="{height:'100%',padding:'0'}">
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
            <el-container>
                <el-aside id="mainSidebar" :style="{width:dynamicWidth}">
                    <NavMenu></NavMenu>
                </el-aside>
                <el-main id="mainContent">
					<el-breadcrumb separator="/" v-show="this.$route.meta.title">
						<el-breadcrumb-item>{{this.$route.meta.title}}</el-breadcrumb-item>
					</el-breadcrumb>
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
                normalWidth:false,//开始左侧菜单栏不折叠
				dynamicWidth:200 + 'px',
            }
        },
        created() {
        },
        mounted() { 
        },
        methods: {
			//改变侧边栏宽度
            exchangeWidth(){
                this.normalWidth = !this.normalWidth;
                if(this.normalWidth){
                    this.dynamicWidth = 70 + 'px';
                }else{
                    this.dynamicWidth = 200 + 'px';
                }
            },
			//登出
			logout(){
				this.$confirm('确认退出当前系统,是否继续?', '温馨提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
				}).then(() => {
					this.$router.push({path:'/login'});
					this.$notify({
						title: '登出提示',
						message: '登出成功',
						type: 'success'
					});
				}).catch(() => { 
				});
			}
        },
    }
</script>

<style lang="scss" scoped>
    .main{
		width:100%;
		height:100%;
        #mainHeader{
            width:100%;
            height:64px;
			background-color: #293543;
			box-shadow: 0px 0px 5px #aaaaaa;
			color:#fff;
			position: fixed;
			top:0;
			left:0;
			z-index:9;
			
            span{
                display: block;
                float:left;
				margin:18px 20px;
				i{
					font-size:28px;
				}
            }
            p{
                font-size:20px;
                float:left;
				line-height: 64px;
            }
            .mainLogout{
                float:right;
				margin:0 20px;
                img{
                    width:34px;
                    height:34px;
                    display: inline-block;
					vertical-align: middle;
					margin:15px 10px;
					border-radius:50%;
                }
				p{
					font-size:14px;
					line-height: 64px;
					vertical-align: middle;
					display: inline-block;
					float:none;
				}
            }
        }
		
		#mainSidebar{
			background:#293543;
			position: fixed;
			top:64px;
			left:0;
			height:100%;
		}
		#mainContent{
			margin:64px 0 0 200px;
			background-color: #f1f1f1;
			padding:0;
		}
		
    }
	

</style>
<style>
	.el-menu-demo:not(.el-menu--collapse) {
		width: 200px;
	}
	/* 无子菜单时 */
	.el-menu{
		background-color: #293543!important;
	}
	/* 有子菜单时 */
	.el-submenu__title{
		color:#fff!important;
	}
	.el-submenu__title:hover,.el-submenu__title:focus{
		background-color: #363E4F!important;
	}
	.el-menu-item{
		color:#fff!important;
	}
	.el-menu-item:hover,.el-menu-item:focus{
		background-color:#38445d!important;
	}
	.el-submenu .el-menu-item:hover,.el-submenu .el-menu-item:focus{
		background-color:#38445d!important;
		border-left:2px solid #3071f4;
	}
	/* 面包靴导航 */
	.el-breadcrumb{
		height:45px;
		line-height: 45px;
		margin:0;
		padding:0 15px;
		background-color: #fff;
	}
	.el-breadcrumb__item:last-child .el-breadcrumb__inner{
        font-size: 12px;
        font-weight: 700;
        color: #495060;
    }
	/* form-item默认样式修改 */
	.el-form-item{
		margin-bottom:0!important;
	}
	.el-input__inner{
		padding:0 5px !important;
	}
	.el-input{
		font-size:12px!important;
	}
	
	.el-table .cell{
		text-align: center!important;
	}
</style>