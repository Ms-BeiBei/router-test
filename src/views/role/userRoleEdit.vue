<template>
  <div class="userRoleadd">
    <a-form :form="form" labelAlign="left">
      <a-row class="user_container-top--sty">
        <a-col :span="12">
          <a-form-item
            label="名称"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 16 }"
          >
            <a-input
              v-decorator="[
                'note',
                {
                  rules: [{ required: true, message: '请输入名称!' }],
                },
              ]"
              placeholder="请输入名称"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="标识"
            :label-col="{ span: 4 }"
            :wrapper-col="{ span: 16 }"
          >
            <a-input
              v-decorator="[
                'note1',
                {
                  rules: [{ required: true, message: '请输入标识!' }],
                },
              ]"
              placeholder="请输入标识"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="备注"
            :label-col="{ span: 2 }"
            :wrapper-col="{ span: 20 }"
          >
            <a-textarea
              v-decorator="[
                'note',
                {
                  rules: [{ required: true, message: '请输入名称!' }],
                },
              ]"
            />
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item>
            <div class="userRoleadd_container">
              <a-form-item label="菜单权限" />
              <div class="userRoleadd_container-left">
                <a-tree
                  v-model="checkedKeys"
                  checkable
                  :expanded-keys="expandedKeys"
                  :auto-expand-parent="autoExpandParent"
                  :selected-keys="selectedKeys"
                  :tree-data="treeData"
                  @expand="onExpand"
                  @select="onSelect"
                />
              </div>
              <a-form-item label="部门权限" />
              <div class="userRoleadd_container-right">
                 <a-tree
                  v-model="checkedKeys"
                  checkable
                  :expanded-keys="expandedKeys"
                  :auto-expand-parent="autoExpandParent"
                  :selected-keys="selectedKeys"
                  :tree-data="treeData"
                  @expand="onExpand"
                  @select="onSelect"
                />
              </div>
            </div>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>

    <a-row>
      <a-col :span="24" align="center">
        <a-button
          type="primary"
          style="margin-right: 10px"
          @click="handleConfirm"
          icon=" check-circle"
          >确认
        </a-button>
        <a-button style="margin-left: 8px" icon="redo" @click="handeCancel"
          >取消</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>
<script>
const treeData = [
  {
    title: "系统",
    key: "0-0",
    children: [
      {
        title: "权限管理",
        key: "0-0-0",
        children: [
          { title: "用户管理", key: "0-0-0-0" },
          { title: "菜单管理", key: "0-0-0-1" },
          { title: "角色管理", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
];
export default {
  name: "userRoleAdd",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      treeData,
      expandedKeys: ["0-0-0", "0-0-1"],
      autoExpandParent: true,
      checkedKeys: ["0-0-0"],
      selectedKeys: [],
      treeData,
    };
  },
  methods: {
    handleConfirm() {
      this.$emit("confirm");
    },
    handeCancel() {
      this.$emit("cancel");
    },
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
    },
  },
};
</script>
<style scoped lang='less'>
.userRoleadd {
  &_container {
    display: flex;
    padding: 10px;
    width: 100%;
    height: 400px;
    &-left {
      width: 50%;
      margin: 10px;
      height: 350px;
      width: 42%;
      border: 1px solid rgb(219, 214, 214);
      overflow: auto;
    }
    &-right {
      flex: 1;
      margin: 10px;
      height: 350px;
      width: 49%;
      border: 1px solid rgb(211, 207, 207);
      overflow: auto;
    }
  }
}
</style>