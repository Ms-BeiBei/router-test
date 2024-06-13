
<template>
  <div class="company-info">
    <span class="rui-theader-title company-info-title">信息</span>
    <a-form layout="inline">
      <a-row :gutter="[0, 60]">
        <a-col :span="8">
          <a-form-item label="总数" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="总劳动人口总数" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="员数" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="管辖范围" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="耕地总面积数" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="育苗数" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="今年合同签订数量" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="今年合同签订收购数量" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="收购点数量" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="地址" name="username">
            {{ 1 }}
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
export default {
  name: "companyInfo",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },       
  data() {
    return {};    
  },
  methods: {},       
};
</script>
<style lang="less" scoped>
.company-info {
  height: 450px;
  overflow: auto;
 background-color: #fff;
  padding: 5px;
  margin: 3px;
  &-title {
    margin-bottom: 20px;
  }
}
</style>
