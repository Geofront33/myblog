<template>
    <div id="loginPage">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left"
                 label-width="0px" class="login-container">
            <h3 class="login_title">系统登录</h3>
            <el-form-item>
                <el-input v-model="ruleForm.username" prop="username"
                                    auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="ruleForm.password" prop="password"
                          auto-complete="off" placeholder="密码" show-password></el-input>
            </el-form-item>

            <el-form-item style="width: 100%">
                <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: 'Geofront',
                    password: '111111'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请选择密码', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post('/login', this.ruleForm).then(res => {
                            console.log(res.data)
                            const jwt = res.headers['authorization']
                            const userInfo = res.data.data
                            // 把数据共享出去
                            _this.$store.commit("SET_TOKEN", jwt)
                            _this.$store.commit("SET_USERINFO", userInfo)
                            // 获取
                            console.log(_this.$store.getters.getUser)
                            _this.$router.push("/blogs")
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #loginPage {
        background-color: #25a4bb;
        background-size: cover;
        position: fixed;
        height: 100%;
        width: 100%;
    }
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background-color: #fff;
        border: 1px solid #eaeaea;
    }

    .login_title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>