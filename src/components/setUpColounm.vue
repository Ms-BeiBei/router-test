<template>
  <div class="tableSet">
    <el-popover placement="bottom" width="350" trigger="click">
      <el-form ref="form" :model="form">
        <a-col :span="20">
          <el-form-item label="">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="列展示"></el-checkbox>
              <el-checkbox label="序号列"></el-checkbox>
              <el-checkbox label="边框"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </a-col>
        <a-col :span="4" class="mt"> <a @click="handleReset" > 重置</a></a-col>
      </el-form>
      <el-tooltip
        class="item"
        effect="dark"
        content="列设置"
        placement="top-start"
        slot="reference"
      >
        <i class="el-icon-setting"></i>
      </el-tooltip>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: "tableSet",
  data() {
    return {
      form: {},
      checkList: [],
    };
  },
  methods: {
    handleOpen() {},
    handleReset() {},
  },
};
</script>
<style scoped lang='less'>
.tableSet {
  display: flex;
  font-size: 20px;
}
</style>