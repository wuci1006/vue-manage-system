<template>
    <div class="editor">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
            @focus="onEditorFocus($event)" @blur="onEditorBlur($event)"
            @change="onEditorChange($event)">
            <!-- 自定义toolar -->
            <!-- <div id="toolbar" slot="toolbar">
              <button class="ql-bold" title="加粗">Bold</button>
              <button class="ql-italic" title="斜体">Italic</button>
              <button class="ql-underline" title="下划线">underline</button>
              <button class="ql-strike" title="删除线">strike</button>
              <button class="ql-blockquote" title="引用"></button>
              <button class="ql-code-block" title="代码"></button>
              <button class="ql-header" value="1" title="标题1"></button>
              <button class="ql-header" value="2" title="标题2"></button>
              <button class="ql-list" value="ordered" title="有序列表"></button>
              <button class="ql-list" value="bullet" title="无序列表"></button>
              <select class="ql-header" title="段落格式">
                <option selected>段落</option>
                <option value="1">标题1</option>
                <option value="2">标题2</option>
                <option value="3">标题3</option>
                <option value="4">标题4</option>
                <option value="5">标题5</option>
                <option value="6">标题6</option>
              </select>
              <select class="ql-size" title="字体大小">
                <option value="10px">10px</option>
                <option value="12px">12px</option>
                <option value="14px">14px</option>
                <option value="16px" selected>16px</option>
                <option value="18px">18px</option>
                <option value="20px">20px</option>
              </select>
              <select class="ql-font" title="字体">
                <option value="SimSun">宋体</option>
                <option value="SimHei">黑体</option>
                <option value="Microsoft-YaHei">微软雅黑</option>
                <option value="KaiTi">楷体</option>
                <option value="FangSong">仿宋</option>
                <option value="Arial">Arial</option>
              </select>
              <select class="ql-color" value="color" title="字体颜色"></select>
              <select class="ql-background" value="background" title="背景颜色"></select>
              <select class="ql-align" value="align" title="对齐"></select>
              <button class="ql-clean" title="还原"></button>
            </div> -->
        </quill-editor>

        <el-button size="medium" type="primary" style="margin-top:10px;"
          @click="handleSubmit">提交</el-button>

        <!-- <div v-html="str" class="ql-editor">{{str}}</div> -->
    </div>
</template>

<script>
// import {Quill,quillEditor} from 'vue-quill-editor';
// import '../../assets/style/quill.css';
// // 自定义字体大小
// let Size = Quill.import('attributors/style/size');
// Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px'];
// Quill.register(Size, true);
// // 自定义字体类型
// var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
//   '宋体', '黑体'
// ];
// var Font = Quill.import('formats/font');
// Font.whitelist = fonts;
// Quill.register(Font, true);

export default {
    data() {
      return {
          str:'',
          editor: null,   // 富文本编辑器对象
          content: `<p>hello world</p>`, // 富文本编辑器默认内容
          editorOption: { //  富文本编辑器配置
              modules: {
                  // toolbar:'#toolbar',
                  toolbar:[
                      ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
                      ['blockquote', 'code-block'],  //引用，代码块

                      [{ 'header': 1 }, { 'header': 2 }],  // 标题，键值对的形式；1、2表示字体大小
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],  //列表
                      [{ 'script': 'sub'}, { 'script': 'super' }], // 上下标
                      [{ 'indent': '-1'}, { 'indent': '+1' }],  // 缩进
                      [{ 'direction': 'rtl' }],    // 文本方向

                      [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  //几级标题

                      [{ 'color': [] }, { 'background': [] }],  // 字体颜色，字体背景颜色
                      [{ 'font': [] }],  //字体
                      [{ 'align': [] }], //对齐方式

                      ['clean'], //清除字体样式
                      ['image','video'] //上传图片、上传视频
                  ]
              },
              theme: 'snow',//主题
              placeholder: '请输入正文'
          },
      }
    },
    // computed: {
    //   editor() {
    //     return this.$refs.myQuillEditor.quill;
    //   },
    // },
    created() {

    },
    mounted() {
        this.str = this.escapeStringHTML(this.content);
        this.editor = this.$refs.myQuillEditor.quill;
    },
    beforeDestroy(){
        this.editor = null;
        delete this.editor;
    },
    methods: {
        // 转码
        escapeStringHTML(str) {
            str = str.replace(/&lt;/g,'<');
            str = str.replace(/&gt;/g,'>');
            return str;
        },
        // 准备富文本编辑器
        onEditorReady (editor) {

        },
        // 富文本编辑器 失去焦点事件
        onEditorBlur (editor) {

        },
        // 富文本编辑器 获得焦点事件
        onEditorFocus (val,editor) {
            console.log(val); // 富文本获得焦点时的内容
            // editor.enable(false); // 在获取焦点的时候禁用
        },
        // 富文本编辑器 内容改变事件
        onEditorChange (editor) {

        },
        // 提交-获取输入框的内容
        handleSubmit(){
            console.log(this.content)
        }
    },
}
</script>

<style>
.ql-editor{
  min-height:250px;
}
</style>
