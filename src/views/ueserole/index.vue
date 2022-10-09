<template>
  <div class="user_container">
    <div class="user_container-top">
      <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
        <a-row class="user_container-top--sty">
          <a-col :span="6">
            <a-form-item label="名称">
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
          <a-col :span="6">
            <a-form-item label="标识">
              <a-input v-decorator="['note11']" placeholder="请输入标识" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="备注">
              <a-input v-decorator="['note22']" placeholder="请输入备注" />
            </a-form-item>
          </a-col>
          <a-col :span="6" align="right">
            <a-button
              type="primary"
              icon="search"
              style="margin-right: 10px"
              @click="handleSearch"
            >
              查询</a-button
            >
            <a-button style="margin-left: 8px" icon="redo" @click="handeReset">
              重置</a-button
            >
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="user_container-bottom">
      <div class="user_container-bottom--sty">
        <div class="rui-theader-title">角色管理</div>
        <div class="rui-theader-btns">
          <a-button type="primary" @click="handleAdd" size="middle">
            新增
          </a-button>
        </div>
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
      >
        <span slot="action" slot-scope="text">
          <a style="margin-right: 10px" @click="handleUpdate">编辑</a>
          <a @click="handlDelete">删除</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "序号",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "名称",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "标识",
    dataIndex: "address1",
  },
  {
    title: "备注",
    dataIndex: "address2",
  },
  {
    title: "创建时间",
    dataIndex: "address3",
  },
  {
    title: "更新时间",
    dataIndex: "addr4ss",
  },
  {
    title: "操作",
    dataIndex: "addres3s",
    scopedSlots: { customRender: "action" },
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park",
  },
];
export default {
  name: "User",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      data,
      columns,
    };
  },
  created() {},
  methods: {
    handleSearch() {},
    handeReset() {},
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
      margin: 80px;
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