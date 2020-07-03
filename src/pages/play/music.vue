<template>
    <div class="music">
        <music-Player></music-Player>
    </div>
</template>

<script>
    import musicPlayer from '../../components/player/music.vue';
    export default {
        components:{
            musicPlayer
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
    .music{
        padding:20px;
        margin:20px;
        background-color: #fff;
    }

</style>
