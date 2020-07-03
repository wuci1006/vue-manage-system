<template>
    <div class="crossBanner">
        <div class="banner">
            <ul class="slide" @mouseover="handleSlideOver" @mouseout="handleSlideOut">
                <li v-for="(i,index) in bannerList" :key="i.id">
                    <img :src="i.src" />
                </li>
            </ul>
            <ul class="slideTip">
                <li v-for="(i,index) in bannerList" :key="i.id"
                    :class="{'active':'index==bannerNum'}"
                     @mouseover="handlePageOver(index)">
                    <a>{{i.text}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bannerList:[
                    {id:1,text:'欢乐新豪礼',src:require('../../assets/images/img/focus1.jpg')},
                    {id:2,text:'冰爽一夏',src:require('../../assets/images/img/focus2.jpg')},
                    {id:3,text:'秒杀',src:require('../../assets/images/img/focus3.jpg')},
                    {id:4,text:'全场包邮',src:require('../../assets/images/img/focus4.jpg')},
                ],
                bannerLength:4,//图片数量
                bannerNum:-1,//当前轮播图片
                isBanner:false,//设置轮播是否停止
            }
        },
        created() {
        },
        mounted() {
            this.initSlide();
        },
        methods: {
            // 初始化轮播图
            initSlide(){
                let $ = this.$;
                if(!this.isBanner){
                    this.bannerNum ++ ;
                    if(this.bannerNum == this.bannerLength){
                        this.bannerNum = 0;//当page大于图片长度时，从第一个图片开始播放
                        $(".slide").animate({"left":"0"},300);
                    }
                    $(".slide").animate({"left":"-"+this.bannerNum*666+"px"},300);
                    $(".slideTip li").removeClass("active");
                    $(".slideTip li").eq(this.bannerNum).addClass("active");
                }
                setTimeout(()=>{this.initSlide()},3000);
            },
            // 鼠标移入图片-轮播停止
            handleSlideOver(){
                this.isBanner = true;
            },
            // 鼠标移出图片-轮播继续
            handleSlideOut(){
                this.isBanner = false;
            },
            // 鼠标移入底部提示框-轮播切换到当前这一页
            handlePageOver(index){
                let $ = this.$;
                this.bannerNum = index;//设置成当前点击按钮的下标
                $(".slide").stop(true,true).animate({"left":"-"+this.bannerNum*666+"px"},300);
                $(".slideTip li").removeClass("active");
                $(".slideTip li").eq(this.bannerNum).addClass("active");
            },
        },
    }
</script>

<style scoped>
    .crossBanner {
        width:100%;
    }

    .banner {
        position: relative;
        width: 666px;
        height: 300px;
        overflow: hidden;
        margin: 20px auto;
    }

    .slide {
        position: absolute;
    }

    .slide li {
        float: left;
    }

    .slideTip {
        position: absolute;
        float: left;
        left: 0;
        bottom: 0;
    }

    .slideTip li {
        /*红色超链接要高出来其他超链接，绝对底部定位。但父容器LI要相对定位*/
        position: relative;
        /* bottom:0;*/
        float: left;
        width: 165px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        margin-right: 2px;
    }

    .slideTip li a {
        /*红色超链接要高出来其他超链接，绝对底部定位*/
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        display: block;
        color: #fff;
        /*鼠标移到下面超链接时，高度慢慢变高*/
        transition: height 0.3s ease-out;
        background: rgba(51, 51, 51, .5);
    }

    .slideTip li.active a {
        background: rgba(208, 56, 0, .9);
        height: 36px;
        line-height: 36px;
    }

    .slideTip li:last-child {
        margin-right: 0;
    }
</style>
