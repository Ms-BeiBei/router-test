<template>
  <div>
    <a-button @click="login">login</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      localStorage.setItem("token", true);
      this.$router.replace('/')
    },
  },
};
</script>
<style>
</style>