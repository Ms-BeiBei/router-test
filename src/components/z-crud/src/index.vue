<template>
  <div class="z-crud">
    <div class="z-crud__header">
      <div class="z-crud__header__left">
        <slot name="pageTitle" v-if="$slot.pageTitle || pageTitle">
          <span>{{ pageTitle }}</span>
        </slot>
      </div>
      <div class="z-crud__header__right">
        <ZSetting :columns="initalColumns" />
      </div>
    </div>
    <el-table class="z-crud-table">
      <el-table-column
        v-for="item in currentColumns"
        v-bind="item"
        :key="item.prop"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ZSetting from "./setting.vue";

export default {
  name: "ZCrud",
  components: {
    ZSetting,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    pageTitle: String,
  },
  data() {
    return {
      initalColumns: [],
    };
  },
  created() {
    this.initalColumns = this.columns.map((visible = true, ...rest) => ({
      visible,
      ...rest,
    }));
  },
  computed: {
    currentColumns() {
      return this.initalColumns.filter(({ visible }) => visible);
    },
  },
};
</script>

<style lang="less" scoped>
.z-crud {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>