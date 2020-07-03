<template>
    <div class="player">
        <div class="single">
            <video-player  class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @ended="onPlayerEnded($event)"
              @canplay="onPlayerCanplay($event)"
            ></video-player>
        </div>
        <div class="multi">
            <div class="item" v-for="(i,index) in playerOptionsArr" :key="i.id">
                <video-player class="video-player vjs-custom-skin" ref="multiVideoPlayer"
                    :options="playerOptionsArr[index]"></video-player>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: require("../../../static/mp4/1.mp4") //url地址-引用本地地址
                        // src: 'http://192.168.0.201:9998/resource/2.mp4' //url地址-引用线上资源
                    }],
                    // poster: "../../static/images/test.jpg", //你的封面地址
                    // width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                },
                mockArr:[
                    {id:1,src:require("../../../static/mp4/3.mp4")},
                    {id:2,src:require("../../../static/mp4/4.mp4")}
                ],
                playerOptionsArr: [],
            }
        },
        created() {

        },
        mounted() {
            this.handleMulti();
        },
        methods: {
            // 遍历多个播放器
            handleMulti(){
                if (this.mockArr.length > 0) {
                    for (let i = 0; i < this.mockArr.length; i++) {
                        let playArr = {
                            sources: [{ type: "video/mp4" || "rtmp/mp4", src: this.mockArr[i].src }],
                            // techOrder: ["flash"],
                            // flash: {
                            //     swf: require("../../static/swf/video-js.swf")
                            // },
                            autoplay: false,//如果true,浏览器准备好时开始回放。
                            controls: false,//控制条
                            // poster: require("../../assets/images/hat.jpeg"),
                        }
                        this.playerOptionsArr.push(playArr)
                    }
                }
            },
            // 初始化播放-在onPlayerCanplay中调用
            initPlay(player) {
                console.log('初始化当前视频播放器实例对象',player);
                // player.play();
            },
            //监听播放器播放
            onPlayerPlay(player) {
                console.log('监听播放器播放',player);
            },
            //监听播放器暂停
            onPlayerPause(player) {
                console.log('监听播放器暂停',player);
            },
            //监听播放器播放结束
            onPlayerEnded(player) {
                console.log('监听播放器播放结束',player);
            },
            // 监听播放器重新播放
            onPlayerCanplay(player) {
                console.log('监听播放器重新播放',player);
            },
            
            
        },
    }
</script>

<style>
    .video-js .vjs-icon-placeholder {
        width: 100%;
        height: 100%;
        display: block;
    }
    .player{
        display: flex;
        flex-direction:column;
        overflow-x: auto;
    }
    .single{
        width:100%;
    }
    .multi{
        width:100%;
        margin-top:20px;
        display: flex;
    }
    .multi .item{
        flex:1;
    }
    .multi .item:nth-child(2){
        margin-left:20px;
    }

</style>
