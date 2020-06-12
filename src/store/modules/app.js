import {getSysUserLevel,getUserDictGroup,getDictRole} from "../../api/api.js";

const app = {
    state: {
        nodes: [], //节点信息
        menuList: [], //前端菜单栏
        backendMenuList: [], //后端返回的原始菜单数据
        groupList: [], //分组数据
        roleList: [] //角色列表
    },
    getters: {},
    mutations: {
        saveNodes: (state, data) => {
            localStorage.setItem("Nodes", JSON.stringify(data));
            state.nodes = JSON.parse(localStorage.getItem("Nodes"));
        },
        updateMenulist: (state, data) => {
            //序列化后储存
            localStorage.setItem("menuList", JSON.stringify(data));
            //解析成json对象读取
            state.menuList = JSON.parse(localStorage.getItem("menuList"));
        },
        cleanMenu: state => {
            localStorage.removeItem("menuList");
            localStorage.removeItem("backendMenuList");
            state.menuList = [];
            state.backendMenuList = [];
        },
        saveBackendMenuList: (state, data) => {
            localStorage.setItem("backendMenuList", JSON.stringify(data));
            state.backendMenuList = JSON.parse(
                localStorage.getItem("backendMenuList")
            );
        },
        saveGroupList: (state, groupData) => {
            localStorage.setItem("groupList", JSON.stringify(groupData));
            state.groupList = JSON.parse(localStorage.getItem("groupList"));
        },
        saveRoleList: (state, roleData) => {
            localStorage.setItem("roleList", JSON.stringify(roleData));
            state.roleList = JSON.parse(localStorage.getItem("roleList"));
        }
    },
    actions: {
        //获取权限菜单
        getAccessMenuList({ commit }, uid) {
            let listArr = {uid:uid}
            getSysUserLevel(listArr).then(res=>{
                if (res.data.code == "0") {
                    let menuData = res.data.result;
                    commit("saveBackendMenuList", menuData);
                    // commit("updateMenulist", menuData);
                }
            }).catch(err=>{
                this.$Message.error("服务器出错了...");
                console.log(err);
            })
            // axios.get(`${api}/user/user/node/level?uid=${uid}`)
            //     .then(res => {
            //             if (res.data.code == "0") {
            //                 let menuData = res.data.result;
            //                 commit("saveBackendMenuList", menuData);
            //                 commit("updateMenulist", menuData);
            //             }
            //     }).catch(err => {
            //         console.log(err);
            //     });
        },
        //获取分组数据
        getGroupList({ commit }) {
            let listArr = {}
            getUserDictGroup(listArr).then(res=>{
                if (res.data.code === "0") {
                    const dictData = res.data.result;
                    commit("saveGroupList", dictData);
                }
            }).catch(err=>{
                this.$Message.error("服务器出错了...");
                console.log(err);
            })
            // axios.get(`${api}/user/dict/group`)
            //     .then(res => {
            //         if (res.data.code === "0") {
            //             const dictData = res.data.result;
            //             commit("saveGroupList", dictData);
            //         }
            //     }).catch(err => {
            //         console.log(err);
            //     });
        },
        //获取角色列表
        getRoleList({ commit }) {
            let listArr = {}
            getDictRole(listArr).then(res=>{
                if (res.data.code === "0") {
                    commit("saveRoleList", res.data.result);
                }
            }).catch(err=>{
                this.$Message.error("服务器出错了...");
                console.log(err);
            })
            // axios.get(`${api}/user/dict/role`)
            //     .then(res => {
            //         if (res.data.code === "0") {
            //             commit("saveRoleList", res.data.result);
            //         }
            //     }).catch(err => {
            //         console.log(err);
            //     });
        },

    }
};

export default app;
