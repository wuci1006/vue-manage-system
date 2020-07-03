<template>
    <div class="viewer">
        <viewer :images="photoArr">
            <img v-for="(i,index) in photoArr"
                :src="i.src" :key="i.id">
        </viewer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                photoArr:[
                    {id:1,src:require('../../assets/images/banner/banner1.jpg')},
                    {id:2,src:require('../../assets/images/banner/banner2.jpg')},
                    {id:3,src:require('../../assets/images/banner/banner3.jpg')},
                    // {id:4,src:require('../../assets/images/banner/banner4.jpg')},
                    // {id:5,src:require('../../assets/images/banner/banner5.jpg')},
                    // {id:6,src:require('../../assets/images/banner/banner6.jpg')},
                    // {id:7,src:require('../../assets/images/banner/banner7.jpg')},
                ],
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
        },
    }
</script>

<style scoped>
    .viewer{
        width:100%;
    }
    .viewer img{
        width:100%;
        height:400px;
    }

</style>
