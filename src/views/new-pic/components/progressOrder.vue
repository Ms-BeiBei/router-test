<template>
  <div class="progressOrder">
    <span class="rui-theader-title">烟叶订单进度</span>
    <div class="progressOrder-step">
      <a-steps :current="2">
        <a-step title="计划">
          <span slot="description">
            <div>
              <span class="progressOrder-rui-title">内管工作量</span>
            </div>
          </span>
        </a-step>
        <a-step title="合同">
          <span slot="description">This is a description.</span></a-step
        >
        <a-step title="种植">
          <span slot="description">This is a description.</span></a-step
        >
        <a-step title="收购">
          <span slot="description">This is a description.</span></a-step
        >
      </a-steps>
    </div>
  </div>
</template>
<script>
export default {
  name: "progressOrder",
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  methods: {},
};
</script>
<style scoped lang='less'>
.progressOrder {
  height: 430px;
   overflow: auto;
  padding: 5px;
  margin: 3px;
  background: #fff;
  &-step {
    padding: 50px;
    &-rui-title{
      font-size: 15px;
      color: black;
      font-weight: 550;

    }
  }
}
</style>