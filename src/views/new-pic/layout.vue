<template>
  <div class="portCorLayout">
    <a-row>
      <a-col :span="8"><RegionMap /></a-col>
      <a-col :span="8"> <CompanyInfo /></a-col>
      <a-col :span="8"> <WarnNumber /></a-col>
      <a-col :span="24"> <ProgressOrder /></a-col>
    </a-row>
  </div>
</template>
<script>
import RegionMap from "./components/regionMap.vue";
import CompanyInfo from "./components/companyInfo.vue";
import WarnNumber from "./components/warnNumber.vue";
import ProgressOrder from './components/progressOrder.vue'
export default {
  name: "portCorLayout",
  components: { RegionMap, CompanyInfo,WarnNumber,ProgressOrder},
  data() {
    return {};
  },
  created() {},
  methods:{},
};
</script>
<style scoped lang='less'>
.portCorLayout {
  height: 100%;
}
</style>