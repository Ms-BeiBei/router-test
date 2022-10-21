<template>
  <div class="z-crud">
    <div class="z-crud__header">
      <div class="z-crud__header__left">
        <slot name="pageTitle" v-if="$slots.pageTitle || pageTitle">
          <span>{{ pageTitle }}</span>
        </slot>
      </div>
      <div class="z-crud__header__right">
        <ZSetting
          :columns="initalColumns"
          @isbororder="handleBorder"
          @refresh="handleRefrsh"
        />
      </div>
    </div>
    <el-table class="z-crud-table" :data="currentData" :border="border">
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

const SERIAL = {
  label: "序号",
  prop: "serial",
  visible: true,
  Key: "3",
  fixed: false,
};
const SELECTION = {
  label: "#",
  type: "selection",
  width: "55",
  visible: true,
  Key: "4",
  fixed: false,
};

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
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      initalColumns: [],
      border: "",
    };
  },
  created() {
    this.initalColumns = this.getInitalColumns();
  },
  computed: {
    currentColumns() {
      return this.initalColumns.filter(({ visible }) => visible);
    },
    currentData() {
      return this.data.map((item, index) => ({
        ...item,
        serial: index,
      }));
    },
  },
  methods: {
    getInitalColumns() {
      const columns = this.columns.map(
        ({ visible = true, fixed, ...rest }) => ({
          visible,
          fixed,
          ...rest,
        })
      );
      return [SELECTION, SERIAL, ...columns];
    },
    
    handleBorder(visible) {
      this.border = visible;
    },
    handleRefrsh() {
      this.initalColumns = this.getInitalColumns();
      console.log(this.initalColumns ,999)
    },
  },
};
</script>

<style lang="less" scoped>
.z-crud {
  padding: 16px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
}
</style>