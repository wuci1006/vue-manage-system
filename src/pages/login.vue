<template>
    <div class="login">
        <el-card class="cardBox">
            <div slot="header" class="clearfix">
                <span>用户登录</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">注册</el-button> -->
            </div>
            <div style="margin:10px;">
                <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="70px">
                    <el-form-item label="名称" prop="username">
                        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="记住密码">
                        <el-switch v-model="loginForm.remember"></el-switch>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" :style="{width:'300px'}">提交</el-button>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: 'user',
                    password: '12345678',
                    remember:false,
                },
                rules: {
                    username: [
                    { required: true, message: '请输入名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                    ],
                }
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            //提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({path:'/home'});
                    } else {
                        return false;
                    }
                });
            },
        },
    }
</script>

<style lang="scss" scoped>
.login{
    width:100%;
    height:100vh;
    background: url('../assets/images/bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    .cardBox{
        width:360px;
        height:380px;
        position: absolute;
        top:27%;
        left:36%;
        z-index:1;
    }
}
</style>
