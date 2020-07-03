<template>
    <div class="ellipsis">
        <div class="content">
            <div class="example">
                <div class="label">demo1：无省略效果</div>
                <div>{{msg}}</div>
            </div>
            <div class="example">
                <div class="label">demo2：超出一行省略，hover上去显示title</div>
                <div v-ellipsis="{ 'line': 1, 'showTitle': true }" @mouseover="handleOver" @mouseout="handleOut"
                    @mousemove="handleMove">{{msg}}</div>
            </div>
            <div class="example">
                <div class="label">demo3：超出两行省略</div>
                <div v-ellipsis="{ 'line': 2 }">{{msg}}</div>
            </div>
            <div class="example">
                <div class="label">demo4：超出三行省略，省略号右侧留白10个字符串</div>
                <div v-ellipsis="{ 'line': 3, 'rightBlank': 10 }">{{msg}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props:{
            msg:String
        },
        methods: {
            // 鼠标移动到文字上
            handleOver(e) {
                let newTitle = e.target.title;
                e.target.title = '';
                this.$('body').append('<div id="toolTip" >' + newTitle + '</div>');
                this.$('#toolTip').css({
                    'left': (e.pageX + 15 + 'px'),
                    'top': (e.pageY + 5 + 'px'),
                }).show();
            },
            // 鼠标离开文字
            handleOut(e) {
                e.target.title = this.msg;
                this.$('#toolTip').remove();
            },
            // 鼠标移动
            handleMove(e) {
                this.$('#toolTip').css({
                    'left': (e.pageX + 15 + 'px'),
                    'top': (e.pageY + 5 + 'px')
                }).show();
            }
        },
    }
</script>

<style lang="scss" scoped>
    .ellipsis {
        .content {
            width: 500px;
            line-height: 20px;

            .example {
                margin-bottom: 20px;

                .label {
                    margin-bottom: 16px;
                    font-weight: bold;
                }
            }
        }
    }
</style>

<style>
    #toolTip {
        position: absolute;
        color: #ffffff;
        max-width: 250px;
        font-size: 14px;
        padding: 5px 0 7px 10px;
        margin:0;
        background: rgba(40, 40, 40, 0.8);
        border:1px solid #e9f7f6;
        border-radius: 5px;
    }
</style>
