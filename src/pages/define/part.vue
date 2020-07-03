<template>
    <div class="part">
        <animation-Particle></animation-Particle>
    </div>
</template>

<script>
    import animationParticle from '../../components/particle/particle.vue';
    export default {
        components:{
            animationParticle
        },
        data() {
            return {
            }
        },
        methods: {
        },
    }
</script>

<style>
    .part {
        margin: 20px;
        background-color: #fff;
        padding: 20px;
    }
</style>
