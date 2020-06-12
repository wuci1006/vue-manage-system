<template>
  <div>
    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>
    <!-- 编辑器容器 -->
    <div id="editor"></div>
  </div>
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
//中文包
import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
//上传图片所需的适配器
import UploadImageAdapter from '../../assets/editor/uploadImage.js';
export default {
  name: 'ckeditor',
  // props: {
  //   value: {
  //     required: true,
  //   }
  // },
  data() {
    return {
      editor: null,
      contentData:'<p>hello editor</p>',
    }
  },
  mounted(){
    this.initCKEditor()
  },
  methods:{
    initCKEditor() {
      CKEditor.create(document.querySelector('#editor'),{
        toolbar:[
          'heading',
          '|',
          'bold',
          'italic',
          'Underline',
          'fontSize',
          'numberedList',
          'bulletedList',
          'blockQuote',
          '|',
          'alignment:left',
          'alignment:right',
          'alignment:center',
          'alignment:justify',
          '|',
          'imageUpload',
          'Link',
          '|',
          'undo', //撤销
          'redo'//重做
        ],
        heading: {
          options: [
            { model: 'paragraph', title: '段落', class: 'ck-heading_paragraph' },
            { model: 'heading6', view: 'h6', title: '标题6', class: 'ck-heading_heading6' },
            { model: 'heading5', view: 'h5', title: '标题5', class: 'ck-heading_heading5' },
            { model: 'heading4', view: 'h4', title: '标题4', class: 'ck-heading_heading4' },
            { model: 'heading3', view: 'h3', title: '标题3', class: 'ck-heading_heading3' },
            { model: 'heading2', view: 'h2', title: '标题2', class: 'ck-heading_heading2' },
            { model: 'heading1', view: 'h1', title: '标题1', class: 'ck-heading_heading1' }
          ]
        },
        language: 'zh-cn',
        fontSize: {
          options: ['default',14, 16, 18, 20, 22, 24]
        }
      }
      ).then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        //使用图片上传适配器
        editor.plugins.get('FileRepository').createUploadAdapter = ( loader ) => {
            return new UploadImageAdapter(loader)
        };
        editor.model.document.on('change:data', () => {
          //把富文本编辑器获取到的内容传出去
          this.$emit('input', editor.getData())
        });
         //编辑的时候设置富文本编辑器的内容
        editor.setData(this.value);
      }).catch(error => {
        console.error(error);
      });
    },
  }
}
</script>
<style scoped>
//设置编辑器内容区域最小高度
#editor {
  min-height: 380px;
  border: 1px solid #c4c4c4;
}
.ck-content {
  min-height: 380px;
}
</style>
