<style scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background: url(../../assets/loginBg.png) no-repeat;
    background-size: 100% 100%;
}
.form {
    width: 300px;
    height: fit-content;
    text-align: center;
    padding: 50px 40px;
    background: #fff;
    border-radius: 20px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 200px;
    margin: auto;
}
.ant-form-item {
    margin-bottom: 10px;
}
.title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>
<template>
    <div class="bg">
        <div class="form">
            <div class="title">欢迎来到后台管理系统</div>
            <a-form-model
                layout="inline"
                :model="formInline"
                @submit="handleSubmit"
                @submit.native.prevent
            >
                <a-form-model-item>
                    <a-input v-model="formInline.user" placeholder="用户名" size="large">
                        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-input
                        v-model="formInline.password"
                        type="password"
                        placeholder="密码"
                        size="large"
                    >
                        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-model-item>
                <a-form-model-item>
                    <a-button
                        type="primary"
                        html-type="submit"
                        :disabled="formInline.user === '' || formInline.password === ''"
                        size="large"
                    >登录</a-button>
                </a-form-model-item>
            </a-form-model>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { login } from "@/api/api";
import store from "@/store/store";
export default {
    data() {
        return {
            formInline: {
                user: "p1",
                password: "1",
            },
            userList: {
                p1: "001",
                p2: "002",
                admin: "001",
                root: "002",
            },
        };
    },
    methods: {
        handleSubmit(e) {
            let user = this.formInline.user, userType = this.userList[user];
            if (userType) {
                this.changeTheme(userType);
                this.$store.commit("updateUserType", userType);
                this.getToken();
                this.$router.push("/index");
            } else {
                this.$message.info("请输入正确的用户名称");
            }
        },

        loginFn(res) {
            this.$store.commit("updateLogin", res.data);
        },
        getToken() {
            if (!store.state.token) {
                let params = new FormData();
                params.append("loginName", "9999");
                params.append("pwd", "87654321");
                login({
                    params,
                    successFn: this.loginFn,
                });
            }
        },
    },

    created() {
        if (store.state.token) {
            this.$router.push("/index");
        }
    },
};
</script>