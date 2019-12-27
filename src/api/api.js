//该文件专用于调接口和获取数据

//1.导入axios包
import axios from 'axios';
// import store from '../store'
// import { router } from '../router/index';

//让ajax携带cookie
// axios.defaults.withCredentials = true;


//2.设置基础路径
if (process.env.NODE_ENV === 'development') {       //开发环境
    // console.log('development');
    // axios.defaults.baseURL = "http://192.168.0.201:82";
    // axios.defaults.sourceURL = "http://192.168.0.201:81";
} else if (process.env.NODE_ENV === 'production') {   //生产环境
    // console.log('production');
    // axios.defaults.baseURL = 'http://wx.51rec.com:80';
    // axios.defaults.sourceURL = 'http://wx.51rec.com:81';
}


//3.引入参数处理模块
// var qs = require("qs");//它的作用是能把json格式的直接转成data所需的格式


//4.拦截器
// http request 请求拦截器
axios.interceptors.request.use(
    config => {
        let token = localStorage.getItem("token");
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (token) {
            config.headers.Authorization = `JWT ` + window.localStorage.getItem("token");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code == -10002) {
            router.push({name: "login"});
        }
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({path: "login"});
            }
        }
        return Promise.reject(error)
    });


//5.export 导出

//①.首页

//②.用户管理
//用户列表-列表
export const getUser = (params) => { return axios.get("/v1/user", { params }).then(res => res); }
//用户列表-获取编辑信息
export const getUserShow = (params) => { return axios.get("/v1/user/show", { params }).then(res => res); }
//用户列表-编辑
export const putUser = (params) => { return axios.put("/v1/user", params).then(res => res); }
//用户列表-删除
export const deleteUser = (params) => { return axios.delete("/v1/user", { data: params }).then(res => res); }
//用户列表-导出
export const postUserExport = (params) => { return axios.post("/v1/user/export", params).then(res => res); }
//用户列表-导入
export const postUserImport = (files,config) => { return axios.post("/v1/user/import", files,config).then(res => res); }
//添加用户-新增
export const postUser = (params) => { return axios.post("/v1/user", params).then(res => res); }
//添加用户-团队
export const getTeams = (params) => { return axios.get("/v1/user/teams", {params}).then(res => res); }

//③.团队管理
//用户列表-列表
export const getTeam = (params) => { return axios.get("/v1/team", { params }).then(res => res); }
//用户列表-获取编辑信息
export const getTeamShow = (params) => { return axios.get("/v1/team/show", { params }).then(res => res); }
//用户列表-编辑
export const putTeam = (params) => { return axios.put("/v1/team", params).then(res => res); }
//用户列表-删除
export const deleteTeam = (params) => { return axios.delete("/v1/team", { data: params }).then(res => res); }
//添加用户-新增
export const postTeam = (params) => { return axios.post("/v1/team", params).then(res => res); }


//③.班车管理
//班车列表-列表
export const getBus = (params) => { return axios.get("/v1/shuttle", { params }).then(res => res); }
//班车列表-添加
export const postBus = (params) => { return axios.post("/v1/shuttle", params).then(res => res); }
//班车列表-获取编辑信息
export const getBusShow = (params) => { return axios.get("/v1/shuttle/show", { params }).then(res => res); }
//班车列表-编辑
export const putBus = (params) => { return axios.put("/v1/shuttle", params).then(res => res); }
//班车列表-删除
export const deleteBus = (params) => { return axios.delete("/v1/shuttle", { data: params }).then(res => res); }
//班车列表-推送
export const postBusPush = (params) => { return axios.post("/v1/shuttle/push", params).then(res => res); }
//班车列表-导出
export const postBusExport = (params) => { return axios.post("/v1/shuttle/export", params).then(res => res); }
//预约列表-列表
export const getBusOrder = (params) => { return axios.get("/v1/shuttle/ordered", { params }).then(res => res); }
//预约列表-导出
export const postBusOrderExport = (params) => { return axios.post("/v1/shuttle/ordered/export", params).then(res => res); }

//班车列表-获取编辑信息
export const getBusGenerate = (params) => { return axios.get("/v1/shuttle/generate", { params }).then(res => res); }

//④.食堂管理
//预约统计-列表
export const getCanteenOrder = (params) => { return axios.get("/v1/canteen/ordered", { params }).then(res => res); }
//预约统计-导出
export const postCanteenOrderExport = (params) => { return axios.post("/v1/canteen/reserve/export", params ).then(res => res); }
//用餐信息-列表
export const getCanteen = (params) => { return axios.get("/v1/canteen", { params }).then(res => res); }
//用餐信息-添加
export const postCanteen = (params) => { return axios.post("/v1/canteen", params).then(res => res); }
//用餐信息-获取编辑信息
export const getCanteenInfo = (params) => { return axios.get("/v1/canteen/info", { params }).then(res => res); }
//用餐信息-编辑
export const putCanteen = (params) => { return axios.put("/v1/canteen", params).then(res => res); }
//用餐信息-删除
export const deleteCanteen = (params) => { return axios.delete("/v1/canteen", {data:params}).then(res => res); }
//菜单列表-列表
export const getCanteenMenu = (params) => { return axios.get("/v1/canteen/menu", { params }).then(res => res); }
//菜单列表-删除
export const deleteCanteenMenu = (params) => { return axios.delete("/v1/canteen/menu", { data: params }).then(res => res); }
//菜单列表-详情
export const getCanteenMenuShow = (params) => { return axios.get("/v1/canteen/menu/show", { params }).then(res => res); }
//菜单列表-导入
export const postCanteenMenuImport = (files,config) => { return axios.post("/v1/canteen/menu/import", files,config).then(res => res); }
//菜单列表-推送
export const postCanteenMenuPush = (params) => { return axios.post("/v1/canteen/menu/push", params ).then(res => res); }

//⑤.预约管理
//会议室/实验室预约-列表
export const getOrderList = (params) => { return axios.get("/v1/ordered/list", { params }).then(res => res); }
//会议室/实验室预约-通过
export const postOrderSet = (params) => { return axios.post("/v1/ordered/set", params).then(res => res); }
//会议室/实验室预约-导出
export const postOrderExport = (params) => { return axios.post("/v1/ordered/export", params).then(res => res); }
//会议室/实验室列表-列表
export const getOrder = (params) => { return axios.get("/v1/ordered", { params }).then(res => res); }
//会议室/实验室列表-添加
export const postOrder = (params) => { return axios.post("/v1/ordered", params).then(res => res); }
//会议室/实验室列表-获取编辑信息
export const getOrderShow = (params) => { return axios.get("/v1/ordered/show", { params }).then(res => res); }
//会议室/实验室列表-编辑
export const putOrder = (params) => { return axios.put("/v1/ordered", params).then(res => res); }
//会议室/实验室列表-删除
export const deleteOrder = (params) => { return axios.delete("/v1/ordered", { data: params }).then(res => res); }

//⑥.微信管理
//菜单管理-列表
export const getChatMenu = (params) => { return axios.get("/v1/weixin/menu", { params }).then(res => res); }
//菜单管理-添加
export const postChatMenu = (params) => { return axios.post("/v1/weixin/menu", params).then(res => res); }
//菜单管理-获取编辑信息
export const getChatMenuShow = (params) => { return axios.get("/v1/weixin/menu/show", { params }).then(res => res); }
//菜单管理-编辑
export const putChatMenu = (params) => { return axios.put("/v1/weixin/menu", params).then(res => res); }
//菜单管理-删除
export const deleteChatMenu = (params) => { return axios.delete("/v1/weixin/menu", { data: params }).then(res => res); }
//菜单管理-生成
export const postChatMenuGenerate = (params) => { return axios.post("/v1/weixin/menu/generate", params).then(res => res); }

//公众号管理-列表
export const getChatPublic = (params) => { return axios.get("/v1/weixin/public", { params }).then(res => res); }
//公众号管理-添加
export const postChatPublic = (params) => { return axios.post("/v1/weixin/public", params).then(res => res); }
//公众号管理-获取编辑信息
export const getChatPublicShow = (params) => { return axios.get("/v1/weixin/public/show", { params }).then(res => res); }
//公众号管理-编辑
export const putChatPublic = (params) => { return axios.put("/v1/weixin/public", params).then(res => res); }
//公众号管理-删除
export const deleteChatPublic = (params) => { return axios.delete("/v1/weixin/public", { data: params }).then(res => res); }
//公众号管理-接口
export const getPublicShow = (params) => { return axios.get("/v1/weixin/public/login", { params }).then(res => res); }

export const getPublic = (params) => { return axios.get("/v1/weixin", { params }).then(res => res); }

//⑦.新闻中心
//新闻列表-列表
export const getNews = (params) => { return axios.get("/v1/news", { params }).then(res => res); }
//新闻列表-获取编辑信息
export const getNewsShow = (params) => { return axios.get("/v1/news/show", { params }).then(res => res); }
//新闻列表-编辑
export const putNews = (params) => { return axios.put("/v1/news", params).then(res => res); }
//新闻列表-删除
export const deleteNews = (params) => { return axios.delete("/v1/news", { data: params }).then(res => res); }
//新增新闻-新增
export const postNews = (params) => { return axios.post("/v1/news", params).then(res => res); }
//新增新闻-上传图片
export const postUpload = (files,config) => { return axios.post("/v1/upload/file", files,config).then(res => res); }
//新增新闻-所属分类
export const getNewsCategory = (params) => { return axios.get("/v1/news/category", {params}).then(res => res); }

//⑧.系统设置
//用户登录
export const postLogin = (params) => { return axios.post("/user/login", params).then(res => res); }

//用户
//用户列表
export const getSysUserList = (params) => { return axios.get("/user/user/list", {params}).then(res => res); }
//用户详情
export const getSysUserInfo = (params) => { return axios.get("/user/user", {params}).then(res => res); }
//添加用户
export const postSysUser = (params) => { return axios.post("/user/user", params).then(res => res); }
//编辑用户
export const putSysUser = (params) => { return axios.put("/user/user", params).then(res => res); }
//删除用户
export const deleteSysUser = (params) => { return axios.delete("/user/user", {data:params}).then(res => res); }
//导出用户
export const getSysUserExport = (params) => { return axios.get("/user/user/export", {params}).then(res => res); }

//用户节点菜单
export const getSysUserLevel = (params) => { return axios.get("/user/user/node/level", {params}).then(res => res); }
//分组
export const getUserDictGroup = (params) => { return axios.get("/user/dict/group", {params}).then(res => res); }
//角色管理-获取节点列表
export const getDictRole = (params) => { return axios.get("/user/dict/role", {params}).then(res => res); }

//角色
//角色管理-获取角色
export const getUserRole = (params) => { return axios.get("/user/user/role", {params}).then(res => res); }
//角色管理-添加角色
export const postUserRole = (params) => { return axios.post("/user/user/role", params).then(res => res); }
//角色管理-编辑角色
export const putUserRole = (params) => { return axios.put("/user/user/role", params).then(res => res); }
//角色管理-删除角色
export const deleteUserRole = (params) => { return axios.delete("/user/user/role", { data: params }).then(res => res); }
//角色管理-获取角色详情
export const getUserRoleInfo = (params) => { return axios.get("/user/user/role/info", {params}).then(res => res); }
//角色管理-获取节点列表
export const getUserRoleNode = (params) => { return axios.get("/user/user/role/node", {params}).then(res => res); }


