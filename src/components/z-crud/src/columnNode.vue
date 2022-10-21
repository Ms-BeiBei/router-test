<template>
  <div class="columnNode">
    <div class="columnNode-left">
      <i class="el-icon-rank"></i>
      <el-checkbox v-model="item.visible">{{ item.label }}</el-checkbox>
    </div>
    <div class="columnNode-right">
      <i class="el-icon-arrow-left" @click="handleFixedLeft"></i>
      <el-divider direction="vertical"></el-divider>
      <i class="el-icon-arrow-right" @click="handleFixedRight"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "columnNode",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleFixedLeft() {
      this.$set(this.item, "fixed", "left");
    },
    handleFixedRight() {
      this.$set(this.item, "fixed", "right");
    },
  },
};
</script>s
<style lang="less" scoped>
.columnNode {
  display: flex;
  justify-content: space-between;

  margin: 5px;
  &-left {
    padding: 2px;
  }
  &-right {
    display: flex;
    align-items: center;
    .el-icon-arrow-left {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
    }
    .el-icon-arrow-right {
      color: rgba(0, 0, 0, 0.85);
      font-weight: 600;
    }
  }
}
</style>