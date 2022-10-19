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
          <a-button  type="reload" @click="handleRefrsh" size="middle">
           刷新
          </a-button>
           <SetupColumn  />       
        </div> 
      </div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
      >
        <span slot="action" slot-scope>
          <a style="margin-right: 10px" @click="handleUpdate">编辑</a>
          <a-popconfirm
            title="确定删除吗"
            ok-text="确定"
            cancel-text="取消"
            @confirm="confirmDelete"
          >
            <a @click="handlDelete">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </div>
    <a-modal
      :title="title"
      :visible="visible"
      :footer="null"
       width="1200px"
      :closable="true"
      :wrapClassName="fullscreen ? 'user-modal--fullscreen' : ''"
    >
      <template slot="closeIcon" slot-scope>
        <a-icon type="shrink" @click="toggleFullscreen" v-if="fullscreen" />
        <a-icon type="arrows-alt" @click="toggleFullscreen" v-else />
      </template>
      <userRoleAdd
        @confirm="handleOk"
        @cancel="handleCancel"
        v-if="type === 'add'"
      />
      <userRoleEdit
        @confirm="handleOk"
        @cancel="handleCancel"
        v-if="type === 'edit'"
      />
    </a-modal>
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
import userRoleAdd from "./userRoleAdd.vue";
import userRoleEdit from "./userRoleEdit.vue";
import SetupColumn from '@/components/setUpColounm.vue'
export default {
  name: "User",
  components: {
    userRoleAdd,
    userRoleEdit,
    SetupColumn,
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
      visible: false,
      data,
      columns,
      fullscreen: false,
      type: undefined,
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

