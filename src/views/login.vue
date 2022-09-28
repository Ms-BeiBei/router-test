<template>
  <div>
    <a-button @click="login">login-----{{$store.state.test}}</a-button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      localStorage.setItem("token", true);
      this.$store.commit('add')
      this.$router.replace('/')
    },
  },
};
</script>
<style>
</style>