<template>
    <div class="myAplayer">
        <aplayer ref="myAplayer" :audio="audio"
            @pause="handleEvent"
            @play="handleEvent"
            @playing="handleEvent" />
    </div>

</template>

<script>
    export default {
        data() {
            return {
                // audio: {
                //     name: '无名之辈',
                //     artist: '汪苏泷',
                //     url: require('../../../static/mp3/汪苏泷-无名之辈.mp3'),
                //     cover: require('../../assets/images/img_big.jpg'),
                //     lrc: '',
                // },
                audio: [
                    {
                        name: '无名之辈',
                        artist: '汪苏泷',
                        url: require('../../../static/mp3/汪苏泷-无名之辈.mp3'),
                        cover: require('../../assets/images/img_big.jpg'),
                        lrc: '',
                    },
                    {
                        name: '长安决',
                        artist: '汪苏泷',
                        url: require('../../../static/mp3/汪苏泷-长安决.mp3'),
                        cover: require('../../assets/images/img_big.jpg'),
                        lrc: '',
                    },
                ],

            }
        },
        mounted() {

        },
        methods: {
            handleEvent(e) {
                const { media } = this.$refs.myAplayer;

                console.log(media.currentTime); // 获取音频当前播放时间
                console.log(media.duration); // 获取音频总时间 单位：s
                console.log(media.paused); // 获取音频是否暂停
                
                console.log(e);
            },
        }
    }
</script>

<style>
</style>
