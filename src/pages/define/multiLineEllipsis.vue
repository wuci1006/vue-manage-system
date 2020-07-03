<template>
    <div class="multiLineEllipsis">
        <LineEllipsis :msg="msg"></LineEllipsis>
    </div>
</template>

<script>
    import LineEllipsis from '../../components/ellipsis/ellipsis.vue';
    export default {
        components:{
            LineEllipsis
        },
        data() {
            return {
                msg: '我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦',
            }
        },
        methods: {
        },
    }
</script>

<style>
    .multiLineEllipsis {
        margin: 20px;
        background-color: #fff;
        padding: 20px;
    }
</style>
