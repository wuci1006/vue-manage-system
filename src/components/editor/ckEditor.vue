<template>
    <div class="editor">
        <ckeditor style="min-height: 200px; max-height: 620px; border: 1px solid #ccc;"
            :editor="editor" @ready="onReady" v-model="contentData" @input="$emit('input',$event)"
            :config="editorConfig"></ckeditor>

        <el-button size="medium" type="primary" style="margin-top:10px;"
          @click="handleSubmit">提交</el-button>

    </div>
</template>

<script>
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
export default {
    data() {
      return {
        editor: DecoupledEditor,
        contentData:'<p>Content of the editor</p>',
        editorConfig: {
            language: "zh-cn",
            fontSize: {
                options: [8, 10, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 32, 48]
            },
            fontFamily: {
                options: ["宋体", "仿宋", "微软雅黑", "黑体", "仿宋_GB2312", "楷体", "隶书", "幼圆"]
            }
        }
      }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy(){

    },
    methods: {
        onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            );
            editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                return {
                    upload: async () => {
                        return await loader.file.then(f => {
                            const F = new FileReader();
                            F.readAsArrayBuffer(f);
                            console.log(f)
                            return new Promise(resolve => {
                                F.onload = function () {
                                    resolve({bufAsArray: F.result, file: f})
                                };
                            })
                        }).then(v => {
                            console.log(v)
                            //执行上传上传
                            // return this.uploadImgHook(v)
                            //返回标准格式
                            /*return {
                                default: 'http://mmcl.maoming.gov.cn/ys/css/img/BG.png'
                            }*/
                        });

                    }
                }
            };
        },
        // 提交-获取输入框的内容
        handleSubmit(){
          console.log(this.contentData)
        }
    },
}
</script>

<style>

</style>
