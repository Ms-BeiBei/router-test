<template>
  <div>
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      size="mini"
      :rules="rules">
      <el-row>
        <el-col :span="24" >
          <el-form-item label="所属部门" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入所属部门"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" >
          <el-form-item label="所属角色" prop="name1">
            <el-select
              v-model="ruleForm.name1"
              placeholder="请输入所属角色"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="用户名"  prop="name2">
            <el-input
              v-model="ruleForm.name2"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"  >
          <el-form-item label="姓名" prop="name3">
            <el-input
              v-model="ruleForm.name3"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="昵称" >
            <el-input
              v-model="ruleForm.name4"
              placeholder="请输入昵称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" >
            <el-input
              v-model="ruleForm.name33"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"  >
          <el-form-item label="手机">
            <el-input
              v-model="ruleForm.name31"
              placeholder="请输入手机"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注" >
            <el-input
              v-model="ruleForm.name13"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="状态">
            <el-radio-group v-model="ruleForm.radio">
              <el-radio :label="3">启用</el-radio>
              <el-radio :label="6">禁用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "asdas",
  components: {},
  data() {
    return {
      ruleForm: {},
      rules:{
         name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         name1: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         name2: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         name3: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      }
    };
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>