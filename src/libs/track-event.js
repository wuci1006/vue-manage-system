

/* track-events.js */

export default {
    /**
     * @name UVPV 固定名称不支持修改
     * @desc UV、PV埋点
     * @param {Object} context 当前上下文
     */
    UVPV(context) {
        // console.log(context)
    },
    /**
     * @name TONP 固定名称不支持修改
     * @desc 页面停留时间埋点（Time on Page）
     * @param {Object} context 当前上下文
     * @param {Timestamp} et 进入页面时间
     * @param {Timestamp} dt 离开页面时间
     */
    TONP(context, {
        et,
        dt
    }) {
        // console.log(context)
    },
    /**
     * @name 18015 埋点唯一标识ID（自定义）
     * @param {Object} context 当前上下文
     * @param {Object} args 剩余参数
     */
    18015(context, args) {
        console.log(context,args)

        // const time = util.tranformTime(new Date());
        // const { type } = args;
        // const { pathname } = args.view.location;
        // const uid = args.view.localStorage.uid;
        // const { innerText } = args.toElement;

        // let data = {};
        // data.times = time;//获取当前时间
        // data.url = pathname;//前端路由路径
        // data.module = localStorage.getItem("subNode") || "";//操作节点名称
        // data.content = innerText;//提交/导出/新增/删除
        // data.type = type;//时间类型 click
        // data.uid = uid;//用户id

        // 将当前行为发送给后台
        // axios.post(`${api}/system/behavior`, { ...data })
        //     then(res => {
        //         if (res.data.code === "0") {
        //             console.log("埋点数据发送成功");
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

}

/**
 * @event 埋点
 * @example <div v-track:18015.click="handleExport"></div>

<!-- 页面行为埋点（track-view为v-track全局注册的组件） -->
<track-view v-track:18015></track-view>
<track-view v-track:18015.watch="{ rest }"></track-view>
<track-view v-track:18015.watch.delay="{ rest }"></track-view>
<track-view v-if="rest" v-track:18015></track-view>

<!-- 事件行为埋点（DOM） -->
<div v-track:18015.click="handleClick"></div>
<div v-track:18015.click="{ handleClick, item, index }"></div>
<div v-track:18015.click.async="{ handleSearch, rest }"></div>
<div v-track:18015.click.delay="handleClick"></div>

<!-- 事件行为埋点（组件） -->
<cmp v-track:18015.click="handleClick"></cmp>
<cmp v-track:18015.[自定义事件名]="handleSearch"></cmp>
<cmp v-track:18015.[自定义事件名].delay="handleSearch"></cmp>
<cmp v-track:18015.[自定义事件名].async="{ handleSearch, rest }"></cmp>

<!-- 区域展现埋点（block 可以是 DOM 或者组件） -->
<block v-track:18015.show></block>
<block v-track:18015.show.once></block>
<block v-track:18015.show.custom="{ ref: 'scroll' }"></block>
<block v-track:18015.show.custom.once="{ ref: 'scroll' }"></block>


指令修饰符
.click 表示事件行为的埋点
.[custom-event] 表示自定义事件行为的埋点
.native 表示监听组件原生click事件行为的埋点
.watch 表示页面异步行为的埋点
.async 配合.click指令，表示异步事件行为的埋点
.delay 表示埋点是否延迟执行，默认先执行埋点再执行回调
.show 表示区域曝光埋点
.once 配合.show指令，只执行一次埋点
.custom 配合.show指令，表示使用自定义scroll事件

 * */
