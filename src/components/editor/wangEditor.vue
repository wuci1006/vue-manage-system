<template>
    <div class="editor">
        <div id="wangEditor"></div>
        <el-button size="medium" type="primary" style="margin-top:10px;"
          @click="handleSubmit">提交</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created() {

    },
    mounted() {
      this.handleEditor();
    },
    methods: {
        handleEditor() {
            var WangEditor = this.myEditor;
            var editor = new WangEditor("#wangEditor");
            editor.customConfig.uploadImgShowBase64 = true;
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ];
            let that = this;
            editor.customConfig.zIndex = 100;
            editor.customConfig.uploadImgMaxLength = 1;

            // 上传图片的接口事件处理
            // editor.customConfig.customUploadImg = function (files, insert) {
            //     let formData = new FormData();
            //     formData.append("files", files[0]);
            //     let config = {
            //         headers: { "Content-Type": "multipart/form-data" }
            //     };
            //     postUpload(formData,config).then(res => {
            //         if (res.data.code == 1) {
            //             insert(res.data.url)
            //         } else if (res.data.code == -3) {
            //             that.$Message.error('获取数据失败...');
            //         } else {
            //             that.$Message.error('数据出错了...');
            //         }
            //     }).catch(err => {
            //         console.log(err);
            //         that.$Message.error('服务器出错了...');
            //     })
            // }

            editor.create();
            // editor.txt.html(content);//content是初始化的内容
        },
        // 另外一种写法
        handleEditor1(){
            var WangEditor = this.myEditor;
            var editor = new WangEditor("#wangEditor");
            editor.customConfig.uploadImgShowBase64 = true;
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ];
            let that = this;
            editor.customConfig.zIndex = 100;
            editor.customConfig.uploadImgMaxLength = 1;

            // editor.customConfig.debug = true;//开启debug模式
            // editor.customConfig.pasteFilterStyle = false;// 关闭粘贴内容中的样式
            // editor.customConfig.pasteIgnoreImg = true;// 忽略粘贴内容中的图片

            // 上传图片的接口事件处理
            // editor.customConfig.uploadImgServer = 'http://192.168.0.202:91/v1/upload';//设置文件上传的路径
            // editor.customConfig.uploadFileName = 'file';//设置文件上传的参数名称
            // editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024; // 将图片大小限制为 3M
            // editor.customConfig.uploadImgHooks = {
            //     customInsert: function (insertImg, result, editor) {
            //         // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            //         // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            //         // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            //         // console.log(insertImg, result, editor)
            //         // result 必须是一个 JSON 格式字符串！！！否则报错
            //         var url = result[0].url;
            //         insertImg(url);
            //     }
            // }

            editor.create();
            editor.txt.html(contentx);//content是初始化的内容
        },
        // 提交-获取输入框的内容
        handleSubmit(){
            var content = this.$("#wangEditor .w-e-text").html();
            console.log(content)
        }
    },
}
</script>

<style>
#wangEditor .w-e-text-container{
    height:auto!important;
}
#wangEditor .w-e-text{
    overflow-y: hidden;
    min-height:250px;
}
</style>
