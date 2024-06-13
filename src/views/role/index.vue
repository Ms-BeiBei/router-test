<template>
    <ZCrud pageTitle="角色管理11" :columns="columns" :data='data'/>
    
</template>
<script>
const data = [
  {
    id: "1",
    a: "John Brown",
    b: 32,
    address: "New York Park",
  },
  {
    id: "2",
    a: "Jim Green",
    b: 40,
    address: "London Park",
  },
];
import userRoleAdd from "./userRoleAdd.vue";
import userRoleEdit from "./userRoleEdit.vue";
import SetupColumn from '@/components/setUpColounm.vue'
import ZCrud from '@/components/z-crud/src/index'
export default {
  name: "User",
  components: {
    userRoleAdd,
    userRoleEdit,
    SetupColumn,
    ZCrud
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      visible: false,
      data,
      fullscreen: false,
      type: undefined,
      data,
      columns:[
        {
          label:'测试1',
          prop:'a'
        },
        {
          label:'测试2',
          prop:'b'
        },
      ]
    };
  },
  created() {},
  computed: {
    title() {//title computed 是定义 数据,watch 是监听data或者props中的数据，监听时不加this
      if (this.type == "edit") {
        return "编辑";
      }
      if (this.type == "add") {
        return "新增";
      }
    },
  },
  methods: {
    handleAdd() {
      this.visible = true;
      this.type = "add";
    },
    handleUpdate() {
      this.visible = true;
      this.type = "edit";
    },
    handleOk() {
      this.visible = false;
    },
    handleCancel() {
      this.visible = false;
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    },

    confirmDelete() {},
    handleSearch() {},
    handeReset() {},
    handleRefrsh() {},
    handlDelete() {},
  },
};
</script>
<style  lang='less' scoped>
.user_container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  &-top {
    width: 100%;
    height: 200px;
    background: #fff;
    margin: 10px;
    border-radius: 10px;
    &--sty {
      margin: 60px;
    }
  }
  &-bottom {
    margin: 10px;
    flex: 1;
    background: #fff;
    border-radius: 10px;
    &--sty {
      display: flex;
      justify-content: space-between;
      margin: 20px;
    }
  }
}
</style>
<style lang="less">
.user-modal--fullscreen {
  .ant-modal {
    width: 100vw !important;
    max-width: 100vw !important;
    top: 0;
    padding-bottom: 0;
  }
  .ant-modal-body {
    height: calc(100vh - 55px);
    overflow-y: auto;
  }
}
</style>

