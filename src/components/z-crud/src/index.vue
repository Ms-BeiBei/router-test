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
    <el-table
      class="z-crud-table"
      :data="currentData"
      :border="border"
      ref="dragTable"
      row-key="id"
    >
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
import Sortable from "sortablejs";
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
      sortable: null,
      newList: [],
    };
  },
  created() {
    this.initalColumns = this.getInitalColumns();
  },
  mounted() {
    //这里我是在mounted中调用了拖拽方法，一般获取到表格数据后nextTick中就可以调用拖拽方法
    this.setSort();
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
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      )[0];
      this.sortable = Sortable.create(el, {
        ghostClass: "sortable-ghost",
        setData: function (dataTransfer) {
          dataTransfer.setData("Text", "");
        },
        onEnd: (evt) => {
          const targetRow = this.currentData.splice(evt.oldIndex, 1)[0];
          this.currentData.splice(evt.newIndex, 0, targetRow);
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
          this.newList.splice(evt.newIndex, 0, tempIndex);
        },
      });
    },

    handleBorder(visible) {
      this.border = visible;
    },
    handleRefrsh() {
      this.initalColumns = this.getInitalColumns();
      console.log(this.initalColumns, 999);
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
<style>
.sortable-ghost {
  opacity: 0.8;
  color: #fff !important;
  background: #b0c4de !important;
}
</style>