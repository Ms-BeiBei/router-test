<template>
  <div class="userLeft">
    <div class="userLeft-title">组织架构</div>
    <div class="userLeft-right">
      <a-icon type="plus" @click="handleAdd" style="margin-right: 10px" />
      <a-icon type="redo" @click="handleRefrsh" />
    </div>
    <FullscreenModal title="新增" :visible.sync="visible" :defaultFull='false'>11111</FullscreenModal>
  </div>
</template>
<script>
import FullscreenModal from "@/components/FullscreenModal";
export default {
  components: { FullscreenModal },
  name: "userLeft",
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  watch: {},
  computed: {},
  methods: {
    handleAdd() {
      this.visible = true;
    },
    handleRefrsh() {},
  },
};
</script>
<style scoped lang='less'>
.userLeft {
  display: flex;
  justify-content: space-between;
  &-title {
  }
  &-right {
  }
}
</style>