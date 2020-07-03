<template>
    <div id="particlesId"></div>
</template>

<script>
    import particles from 'particles.js';
    import particlesConfig from '../../assets/particle/particles.json';
    export default {
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {
            /**
              * @event {粒子动画}
              * @param {div节点的id,particles.json配置文件}
              * */
            particlesJS("particlesId", particlesConfig);

        },
        methods: {

        }
    }
</script>

<style>
    #particlesId {
        /* position: absolute; */
        width: 100%;
        height: 100%;
        background-color: #b61924;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }
</style>
