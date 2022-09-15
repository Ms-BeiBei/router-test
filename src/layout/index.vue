<template>
  <a-layout class="layout">
    <a-layout-header>Header
      <a-button @click="logout">loginOut</a-button>
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menus />
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menus from "./Menus.vue";
export default {
  components: {
    Menus,
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang='less'>
.layout {
  height: 100%;
  .ant-layout-sider {
    background: #fff;
  }
}
.ant-layout-content {
  height: 100%;
}
::v-deep .ant-layout-header {
  background-color: #6a101021;
}
</style>