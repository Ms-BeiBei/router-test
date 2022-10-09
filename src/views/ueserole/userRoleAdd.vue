<template>
  <div>
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
</template>
<script>
export default {};
</script>
<style scoped>
</style>