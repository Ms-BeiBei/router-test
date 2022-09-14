<template>
  <a-layout class="layout">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menus />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>

</template>
<script>
import Menus from './Menus.vue'
export default {
  components: {
    Menus
  }

}
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
</style>