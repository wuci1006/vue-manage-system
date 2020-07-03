<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide  class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
            <img :src="item.src"/>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 左右箭头 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>

</template>

<script>
    import {Swiper,SwiperSlide,} from 'vue-awesome-swiper';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                carouselArr:[
                    {id:1,src:require('../../assets/images/banner/banner1.jpg')},
                    {id:2,src:require('../../assets/images/banner/banner2.jpg')},
                    {id:3,src:require('../../assets/images/banner/banner3.jpg')},
                    {id:4,src:require('../../assets/images/banner/banner4.jpg')},
                    {id:5,src:require('../../assets/images/banner/banner5.jpg')},
                    {id:6,src:require('../../assets/images/banner/banner6.jpg')},
                    {id:7,src:require('../../assets/images/banner/banner7.jpg')},
                ],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true // 允许点击小圆点跳转
                    },
                    autoplay: {//自动轮播
                        delay: 3000,
                        disableOnInteraction: false //当用户滑动图片后继续自动轮播
                    },
                    loop: true,//开启循环模式
                    navigation: {//设置点击箭头
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: false,
                    spaceBetween: 0,
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex + 1;
                        this.index = swiper.realIndex;
                    },
                }
            }
        },
        mounted() {

        },
        methods:{

        }
    }
</script>
<style>
    .swiper-slide img{
        width:100%;
        height:500px;
        display: block;
    }

</style>
