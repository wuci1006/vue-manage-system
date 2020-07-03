<template>
    <div class="photo1">
        <picture-Viewer></picture-Viewer>
    </div>
</template>

<script>
    import pictureViewer from '../../components/picture/viewer.vue';
    export default {
        components:{
            pictureViewer
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
    .photo1{
        padding:20px;
        margin:20px;
        background-color: #fff;
    }

</style>
