<template>
  <div class="container">
    <a-form layout="horizontal" :form="form" @submit="handleSubmit"  class="login">
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [{ required: true, message: '请输入你的账号!' }],
            },
          ]"
          placeholder="账号"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码' }],
            },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
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
export default {
  data() {
    return {
      loading: false,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.form.validateFields();
    });
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        const response = await axios({
          method: "get",
          url: "/mock/e970a2cd0c4b6c2a4caa379ab878e33a/api-v1/login",
        });
        if (response) {
          const user = {
            id: "1",
            name: "beibei",
            sex: "0",
          };
          const data = Encrypt(user);
          setToken(data);
          this.$router.push("/");
        }
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang='less'>
.container {
  background: linear-gradient(
    to right,
    rgb(235, 214, 225),
    rgb(201, 157, 191),
    rgb(247, 210, 239)
  );
  padding-top: 50px;
  height: 100%;
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
      color: #99d43a;
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #e4e7dd;
      }
    }
  }
}
</style>