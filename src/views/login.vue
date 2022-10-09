<template>
  <div class="container">
    <div class="header">
      <img src="../assets/bac.png" />
      <span class="title">{{ "Antd admin" }}</span>
    </div>
    <a-form
      layout="horizontal"
      :form="form"
      @submit="handleSubmit"
      class="login"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'username',
            { rules: [{ required: true, message: '请输入账号!' }] },
          ]"
          placeholder="账号"
        >
          <a-icon slot="prefix" type="user" style="color: (0, 0, 0, 0.85)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码' }] },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: (0, 0, 0, 0.85)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'verifyCode',
            { rules: [{ required: true, len: 4, message: '请输入验证码' }] },
          ]"
          placeholder="验证码"
        >
          <a-icon slot="prefix" type="safety" style="color: (0, 0, 0, 0.85)" />
          <img
            slot="suffix"
            :src="base64"
            style="cursor: pointer; width: 50px; height: 50px"
            @click="getVerifyCode"
          />
        </a-input>
      </a-form-item>
      <div>
        <a-checkbox :checked="true"> 自动登录 </a-checkbox>
      </div>
      <a-form-item>
        <a-button
          html-type="submit"
          :loading="loading"
          type="primary"
          style="width: 100%; margin-top: 24px"
          size="large"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import axios from "@/http/axios";
import { Encrypt, setToken } from "@/utils";
import { message } from "ant-design-vue";
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      base64: "",
      captchaId: "",
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // this.form.validateFields();
    });
  },
  created() {
    this.getVerifyCode();
  },
  methods: {
    async handleSubmit() {
       setToken('hjofhewqiHDNBBBBBBBBBBBBBB');
         this.$router.push("/");
      // try {
      //   this.loading = true;
      //   const data = {
      //     captchaId: this.captchaId,
      //     ...this.form.getFieldsValue(),
      //   };
      //   const { data: response } = await axios({
      //     method: "post",
      //     url: "/admin/login",
      //     data,
      //   });
      //   if (response.code !== 200) {
      //     throw response.message;
      //   }
      //   // setToken(response.data.token);
      //   this.$router.push("/");
      // } catch (error) {
      //   this.$message.error(error);
      // } finally {
      //   this.loading = false;
      // }
    },
    async getVerifyCode() {
      try {
        const response = await axios({
          method: "get",
          url: "/admin/captcha/img",
        });
        if (response) {
          this.base64 = response.data.data.img;
          this.captchaId = response.data.data.id;
        }
      } catch (err) {
      } finally {
      }
    },
  },
};
</script>
<style lang='less' scoped>
.header {
  height: 100px;
  line-height: 190px;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.85);
    font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    text-align: center;
  }
}
.container {
  background-image: url("../assets/background.svg");
  background-size: 100% 100%;
  background-attachment: fixed;
  padding-top: 50px;
  height: 100%;
}
.login {
  top: 60px;
  position: relative;
  width: 368px;
  margin: 0 auto;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
  @media screen and (max-width: 320px) {
    .captcha-button {
      font-size: 14px;
    }
  }
  .icon {
    font-size: 24px;
    color: #5a54a7;
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #e4e7dd;
    }
  }
}
</style>