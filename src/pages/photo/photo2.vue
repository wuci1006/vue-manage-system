<template>
    <div class="photo">
        <img class="img" :src="imgSrc" @click="imgEvent" alt="">
        <Big-Img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></Big-Img>
    </div>
</template>

<script>
    import BigImg from '../../components/picture/bigImg.vue';
    export default {
        components:{
            BigImg
        },
        data() {
            return {
                showImg: false,
                imgSrc: require('../../assets/images/img_big.jpg'),
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            //点击图片出现放大模块
            imgEvent(e) {
                if (e.target.nodeName === 'IMG') {
                    // 获取触发事件对象的属性
                    this.imgSrc = e.target.src
                    this.showImg = true;
                }
            },
            //点击图片复原
            viewImg() {
                this.showImg = false;
            },
        },
    }
</script>

<style scoped>
    .photo{
        margin:20px;
        background-color: #fff;
        padding:20px;
    }


</style>
