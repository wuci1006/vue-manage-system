 <template>
	<div id="navbar">
        <el-menu :default-active="currentRoute" :default-openeds="opens" class="el-menu-vertical-demo"
            router @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            
            <template v-for="(first,f_index) in navData">
				<!-- 有子菜单 -->
                <el-submenu :index="first.index" :key="`menu0_${f_index}`" v-if="first.second.length>0">
                    <template slot="title" v-if="first.title">
                        <i :class="first.icon"></i>
                        <span slot="title">{{first.title}}</span>
                    </template>
                    <el-menu-item-group v-for="(second,s_index) in first.second" :key="s_index">
                        <span slot="title" v-if="second.title">{{second.title}}</span>
                        <el-menu-item :index="second_child.index" v-for="(second_child,second_c_index) in second.child"
                                      :key="second_c_index">
							{{second_child.content}}
						</el-menu-item>
                    </el-menu-item-group>
                    <div v-for="(second,s_index) in first.second" :key="s_index+'a'">
                        <el-submenu :index="third.index" v-for="(third,th_index) in second.third" :key="th_index">
                            <span slot="title">{{third.title}}</span>
                            <el-menu-item :index="third_child.index" v-for="(third_child,third_c_index) in third.child"
                                          :key="third_c_index">
								{{third_child.content}}
							</el-menu-item>
                        </el-submenu>
                    </div>
                </el-submenu>
				
                <!-- 没有子菜单 -->
                <el-menu-item :index="first.index" :key="`menu0_${f_index}`" v-if="first.second.length==0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{first.title}}</span>
                </el-menu-item>
				
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false,
            currentRoute: "",
            opens: [],
            navData: [
                {index: "/article",title: "内容",icon: "el-icon-location",
                    second: [
                        {title: "这里全是知识库相关",child: [
                            {index: "/article/list",content: "知识文章"},
                            {index: "/article/sort",content: "分类管理"},
                            {index: "/article/organize",content: "机构管理"}]
                        },
                        {third: [
                            {title: "举报相关",index: "",
                                child: [
									{index: "",content: "已举报"},
                                    {index: "",content: "已举报"}
                                ]
                            }
                            ]
                        }
                    ]
                },
                {
                    index: "/hospital",
                    title: "医院医生",
                    icon: "el-icon-menu",
                    second: [
                        {
                            title: "医院医生相关信息",
                            child: [
                                {
                                    index: "/hospital/hospitalList",
                                    content: "医院库"
                                },
                                {
                                    index: "/hospital/doctorList",
                                    content: "医生库"
                                },
                                {
                                    index: "/hospital/doctorTeamList",
                                    content: "团队医生"
                                },
                                {
                                    index: "/hospital/doctorApply",
                                    content: "申请入住"
                                }
                            ]
                        }
                    ]
                },
 
                // {
                //     index: "3",
                //     title: "医生问答",
                //     icon: "el-icon-menu",
                //     second: []
                // },
                // {
                //     index: "4",
                //     title: "申请入住",
                //     icon: "el-icon-menu",
                //     second: []
                // },
                // {
                //     index: "5",
                //     title: "患者列表",
                //     icon: "el-icon-menu",
                //     second: []
                // },
                {
                    index: "/community",
                    title: "社区管理",
                    icon: "el-icon-menu",
                    second: [
                        {
                            child: [
                                {
                                    index: "/community/circleList",
                                    content: "圈子列表"
                                },
                                {
                                    index: "/community/invitationList",
                                    content: "帖子列表"
                                },
                                {
                                    index: "/community/commentList",
                                    content: "评论列表"
                                },
                                {
                                    index: "/community/report",
                                    content: "举报管理"
                                }
                            ]
                        }
                    ]
                },
                {
                    index: "7",
                    title: "评论审批",
                    icon: "el-icon-menu",
                    second: []
                },
                {
                    index: "8",
                    title: "活动设置",
                    icon: "el-icon-menu",
                    second: [
                        {
                            child: [
                                {
                                    index: "/activity/banner",
                                    content: "banner设置"
                                }
                            ]
                        }
                    ]
                },
                {
                    index: "/shop",
                    title: "商品管理",
                    icon: "el-icon-menu",
                    second: [
                        {
                            child: [
                                {
                                    index: "/shop/list",
                                    content: "商品列表"
                                }
                            ]
                        }
                    ]
                },
                {
                    index: "10",
                    title: "订单信息",
                    icon: "el-icon-menu",
                    second: [
                        {
                            child: [
                                {
                                    index: "/order/list",
                                    content: "订单列表"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    created() {
        this.currentRoute = this.$route.path;
        this.opens = [];
        this.opens[0] = this.currentRoute.substring(
            this.currentRoute.indexOf("/"),
            this.currentRoute.lastIndexOf("/")
        );
        console.log(this.opens);
    },
    mounted() {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
 
<style lang="scss" scoped>
#navbar {
    width: 200px;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        min-height: 100vh;
        overflow-y: scroll;
    }
}

</style>
