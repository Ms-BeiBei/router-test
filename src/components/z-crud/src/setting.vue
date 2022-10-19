<template>
  <el-popover
    placement="bottom"
    width="350"
    trigger="click"
    popper-class="z-setting"
  >
    <div class="z-setting__header"></div>
    <div class="z-setting__content">
      <div class="z-setting-column" v-for="item in columns" :key="item.prop">
        <span>{{ item.label }}</span>
        <el-checkbox v-model="item.visible"></el-checkbox>
      </div>
    </div>

    <i class="el-icon-setting" slot="reference"></i>
  </el-popover>
</template>

<script>
export default {
  name: "ZSetting",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.z-setting {
}
</style>