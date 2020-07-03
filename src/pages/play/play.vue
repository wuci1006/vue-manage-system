<template>
    <div class="play">
        <Video-Player></Video-Player>
    </div>
</template>

<script>
    import VideoPlayer from '../../components/player/player.vue';
    export default {
        components:{
            VideoPlayer
        },
        data() {
            return {
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
    .play{
        padding:20px;
        margin:20px;
        background-color: #fff;
    }

</style>
