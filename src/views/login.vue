<template>
  <div>
    <a-button @click="login">login-----{{ $store.state.test }}</a-button>
  </div>
</template>
<script>
import axios from '@/http/axios'
export default {
  methods: {
    login() {
      // 发送 POST 请求
      axios({
        method: "get",
        url: "/mock/e970a2cd0c4b6c2a4caa379ab878e33a/api-v1/login",
      });

      localStorage.setItem("token", true);
      // this.$store.commit('add',10) // 1:直接提交最简单的方式,提交只打印出来参数。
      this.$store.commit({ type: "add", amount: 100 }); // 2:提交 mutation 的另一种方式是直接使用包含 type 属性的对象。
      this.$router.replace("/");
    },
  },
};
</script>
<style>
</style>