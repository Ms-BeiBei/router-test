<template>
  <div class="userLeft">
    <div class="userLeft-title">
      组织架构
      <a-tree
        checkable
        :tree-data="treeData"
        :default-expanded-keys="['0-0-0', '0-0-1']"
        :default-selected-keys="['0-0-0', '0-0-1']"
        :default-checked-keys="['0-0-0', '0-0-1']"
        :replace-fields="replaceFields"
        @select="onSelect"
        @check="onCheck"
      />
    </div>
    <div class="userLeft-right">
      <a-icon type="plus" @click="handleAdd" style="margin-right: 10px" />
      <a-icon type="redo" @click="handleRefrsh" />
    </div>
    <div><a-divider type='vertical' style="height:100%"></a-divider></div>
    <FullscreenModal
      title="新增"
      :visible.sync="visible"
      :defaultFull="false"
      width="800px"
    >
      <template #content>
        <a-form
          :form="form"
          labelAlign="left"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-row class="user_container-top--sty">
            <a-col :span="24">
              <a-form-item label="部门名称">
                <a-input
                  v-decorator="[
                    'note',
                    {
                      rules: [{ required: true, message: '请输入部门名称!' }],
                    },
                  ]"
                  placeholder="请输入部门名称"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="上级部门">
                <a-tree-select
                  show-search
                  allow-clear
                  :replaceFields="{
                    children: 'children',
                    title: 'name',
                    key: 'id',
                    value: 'id',
                  }"
                  :tree-data="treeData"
                  v-decorator="[
                    'note1',
                    {
                      rules: [{ required: true, message: '请输入标识!' }],
                    },
                  ]"
                  placeholder="请输入标识"
                >
                </a-tree-select>
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="排序号">
                <a-textarea v-decorator="['note']" />
              </a-form-item>
            </a-col>
            <a-col> </a-col>
          </a-row>
        </a-form>
      </template>
    </FullscreenModal>
  </div>
</template>
<script>
import FullscreenModal from "@/components/FullscreenModal";
import { arrToTree } from "@/utils/index.js";
export default {
  components: { FullscreenModal },
  name: "userLeft",
  data() {
    return {
      visible: false,
      treeData: [],
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  created() {
    this.treeData = arrToTree([
      { id: 1, name: "部门A", pId: 0 },
      { id: 2, name: "部门B", pId: 0 },
      { id: 3, name: "部门C", pId: 1 },
      { id: 4, name: "部门D", pId: 1 },
      { id: 5, name: "部门E", pId: 2 },
      { id: 6, name: "部门F", pId: 3 },
      { id: 7, name: "部门G", pId: 2 },
      { id: 8, name: "部门H", pId: 4 },
    ]);
  },
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
  height: 100%;
  justify-content: space-between;
  &-title {
  }
  &-right {
    height: 100%;
    &-divider{
      height: 100%;
    }
  }
}
</style>