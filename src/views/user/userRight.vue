<template>
  <div class="UserRight">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="mini"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input v-model="ruleForm.region" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="type">
          <el-form-item label="邮箱">
            <el-input
              v-model="ruleForm.name1"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机" v-if="type">
            <el-input
              v-model="ruleForm.name2"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="备注" v-if="type">
            <el-input
              v-model="ruleForm.name3"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" align="center">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >查询</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <i
              style="margin-left: 10px"
              @click="handletogg"
              :class="type ? 'el-icon-arrow-down' : 'el-icon-arrow-up'"
            >
            </i>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="UserRight-container">
      <div class="UserRight-container-left rui-theader-title">用户管理</div>
      <div class="UserRight-container-right">
        <el-button type="primary" size="mini" @click="handleAdd">
          <i class="el-icon-plus"></i>增加</el-button
        >
        <el-button
          type="success"
          size="mini"
          :disabled="disabled"
          @click="handleTransForm"
          >转移</el-button
        >
        <el-button
          type="info"
          size="mini"
          :disabled="disabled"
          @click="handleDelete"
        >
          <i class="el-icon-delete-solid"></i>删除</el-button
        >
      </div>
    </div>
    <el-table
      border
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="头像" width="120">
        <template slot-scope>
          <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar></div
        ></template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="user" label="用户名"> </el-table-column>
      <el-table-column prop="depart" label="所在部门" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="role" label="所属角色" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="neck" label="呢称" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="邮箱" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="tele" label="手机" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address1" label="备注" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="status" label="状态" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="createtime" label="创建时间" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="edittime" label="修改时间" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="operate" label="操作" width="150" fixed="right">
        <template slot-scope>
          <a style="margin-right: 5px" @click="handleEdit">编辑</a>
          <a style="margin-right: 5px" @click="handleChangePassword">改密</a>
          <el-popconfirm title="这是一段内容确定删除吗？">
            <a @click="handleDeleteRecord">删除</a>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <FullscreenModal
      :visible.sync="visible"
      :title="title"
      width="1000px"
      @ok="handleCancel"
      :defaultFull="false"
    >
      <template #content>
        <div v-if="typeTitle === 'A'">
          <el-form :model="transferForm" size="mini">
            <el-form-item label="转移至">
              <el-select v-model="transfer"></el-select>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="typeTitle === 'D'">
          <el-form :model="changePasswordForm" size="mini">
            <el-form-item label="新密码">
              <el-input v-model="changePassword"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <template v-if="typeTitle === 'B'">
          <UserAdd></UserAdd>
        </template>
        <template v-if="typeTitle === 'C'">
          <UserEdit></UserEdit>
        </template>
      </template>
    </FullscreenModal>
  </div>
</template>
<script>
import FullscreenModal from "@/components/FullscreenModal";
import UserEdit from "./userEdit";
import UserAdd from "./userAdd";
const tableData = [
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-07",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
];
export default {
  name: "UserRight",
  components: {
    FullscreenModal,
    UserAdd,
    UserEdit,
  },
  data() {
    return {
      transfer: "",
      transferForm: "",
      ruleForm: {},
      type: true,
      tableData,
      visible: false,
      multipleSelection: [],
      typeTitle: undefined,
      changePassword: "",
      changePasswordForm: {},
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  created() {},
  computed: {
    disabled() {
      return this.multipleSelection.length === 0;
    },
    title() {
      if (this.typeTitle == "A") {
        return "转移部门";
      }
      if (this.typeTitle == "B") {
        return "新增";
      }
      if (this.typeTitle == "C") {
        return "编辑";
      }
      if (this.typeTitle == "D") {
        return "修改密码";
      }
    },
  },
  methods: {
    handletogg() {
      this.type = !this.type;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection, "this.multipleSelection");
    },
    handleEdit() {
      this.typeTitle = "C";
      this.visible = true;
    },
    handleChangePassword() {
      this.typeTitle = "D";
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleAdd() {
      this.typeTitle = "B";
      this.visible = true;
    },
    handleTransForm() {
      this.typeTitle = "A";
      this.visible = true;
    },
    handleDeleteRecord() {},
    handleDelete() {
      this.$alert("确定要删除所选的用户吗?", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      });
    },
  },
};
</script>
<style scoped lang='less'>
.UserRight {
  &-container {
    display: flex;
    justify-content: space-between;
    &-left {
    }
    &-right {
      padding: 20px;
    }
  }
}
</style>