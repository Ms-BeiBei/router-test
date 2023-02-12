<template>
  <div class="image-map">
    <div id="containerMap"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "imageMap",
  data() {
    return {};
  },
  mounted() {
    this.intiMap();
  },
  methods: {
    intiMap() {
      const chartDom = document.getElementById("containerMap");
      const myChart = echarts.init(chartDom);
      axios.get("/map_datas/" + 10500001 + ".geoJson").then((geoDr) => {
        echarts.registerMap("CQ", geoDr.data);
        myChart.setOption({
          title: {
            text: "烟草公司区域图",
          },
          geo: [
            {
              name: "CQ",
              type: "map",
              roam: true,
              map: "CQ",
              label: {
                show: false,
                color: "#333",
                formatter: (pms) => {
                  return pms.name.replace(
                    /区|土家族自治县|土家族苗族自治县|土家族苗族自治县|苗族土家族自治县/,
                    ""
                  );
                },
              },
              itemStyle: {
                normal: {
                  borderWidth: 0.5, //区域边框宽度
                  borderColor: "#fff", //区域边框颜色
                  areaColor: "#9bbad7", //区域颜色
                },
              },
            },
          ],
        });
      });
    },
  },
};
</script>
<style scoped lang='less'>
.image-map {
  height: 450px;
  overflow: auto;
  background-color: #fff;
  padding: 5px;
  margin: 3px;
  #containerMap {
    height: 100%;
  }
}
</style>