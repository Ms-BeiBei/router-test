<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="菜单类型" prop="name">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="目录"></el-radio>
        <el-radio label="菜单"></el-radio>
        <el-radio label="权限"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="节点名称" prop="region">
      <el-input v-model="ruleForm.region" placeholder="请选择节点名称">
      </el-input>
    </el-form-item>
    <el-form-item label="上级节点" prop="region11">
      <el-select v-model="ruleForm.region11" placeholder="请选择上级节点">
      </el-select>
    </el-form-item>
    <el-form-item label="节点路由" prop="region22">
      <el-input v-model="ruleForm.region22" placeholder="请选择节点路由">
      </el-input>
    </el-form-item>
    <el-form-item label="节点图标">
      <SelectedIcon
        ref="icons"
        @selected="selectedIcon"
        v-model="ruleForm.iconname"
      />
    </el-form-item>
    <el-form-item label="是否显示">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="排序号">
      <el-input v-model="ruleForm.region" placeholder="请选择活动区域">
      </el-input>
    </el-form-item>
  </el-form>
</template>
<script>
import SelectedIcon from "../../components/iconSelect.vue";
export default {
  components: { SelectedIcon },
  data() {
    return {
      ruleForm: {
        iconname:'',
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        region11: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        region22: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    selectedIcon(iconname) {
      this.ruleForm.iconname = iconname;
    },
  },
};
</script>
<style scoped>
</style>