<template>
  <el-popover
    placement="bottom"
    width="350"
    trigger="click"
    popper-class="z-setting"
  >
    <div class="z-setting__header">
      <el-checkbox v-model="itemVisible">列展示</el-checkbox>
      <el-checkbox v-model="serialColumnVisible">序号列</el-checkbox>
      <el-checkbox v-model="boderVisible">边框</el-checkbox>
      <el-button type="text" @click="handleRefresh">重置</el-button>
    </div>
    <div class="z-setting__content">
      <VueDraggeable v-model="columns" >
        <transition-group>
          <!-- <div  v-for="item in columns"
            :key="item"
            :item="item">
            {{item.label}}
          </div> -->
          <ColumnNode
            v-for="(item,index) in columns"
             :key="index"
            :item="item"
          />
        </transition-group>
      </VueDraggeable>
    </div>
    <i class="el-icon-setting" slot="reference"></i>
  </el-popover>
</template>
<script>
import ColumnNode from "../../../components/z-crud/src/columnNode.vue";
import VueDraggeable from "vuedraggable";
export default {
  name: "ZSetting",
  components: { ColumnNode,VueDraggeable },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      serialColumnVisible: true,
      itemVisible: true,
      boderVisible: false,
    };
  },
  watch: {
    serialColumnVisible(visible) {
      const serialColumn = this.columns.find(({ prop }) => prop === "serial");
      serialColumn.visible = visible;
    },
    boderVisible(visible) {
      this.$emit("isbororder", visible);
    },
    itemVisible(visible) {
      this.columns.forEach((item) => {
        item.visible = visible;
      });
    },
  },
  methods: {
    handleRefresh() {
      this.$emit("refresh");
      Object.assign(this.$data, this.$options.data());
    },
    
  },
};
</script>

<style lang="less">
.z-setting {
  min-width: 177px;
  padding: 0;
  &__header {
    min-height: 32px;
    color: #000000d9;
    font-weight: 500;
    padding: 5px 16px 4px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<style>

</style>