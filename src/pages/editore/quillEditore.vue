<template>
    <div class="quillEditore">
        <quill-editor></quill-editor>
    </div>
</template>

<script>
import quillEditor from '../../components/editor/quillEditor.vue';
export default {
    components:{
        quillEditor
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
.quillEditore{
    background-color: #fff;
    margin:20px;
    padding:20px;
}

</style>
