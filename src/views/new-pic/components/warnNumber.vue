<template>
  <div class="warn-number">
    <div id="warnCharts"></div>
    <a-table :columns="columns" :data-source="list" size="small" bordered> </a-table>
  </div>
</template>
<script>
import * as echarts from "echarts";
const columns = [
  {
    title: "计划下达",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "合同签订",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "物资配套",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "育苗",
    key: "action",
    dataIndex: "tags2",
  },
  {
    title: "移栽",
    key: "action",
    dataIndex: "tags2",
  },
  {
    title: "田管",
    key: "action",
    dataIndex: "tags2",
  },
  {
    title: "烘烤",
    key: "action",
    dataIndex: "tags2",
  },
  {
    title: "收购",
    key: "action",
    dataIndex: "tags21",
  },
  {
    title: "调拨",
    key: "action",
    dataIndex: "tags22",
  },
];
const tableData = [
  { value: 60, name: "计划下达" },
  { value: 40, name: "合同签订" },
  { value: 20, name: "物资配套" },
  { value: 80, name: "育苗" },
  { value: 100, name: "移栽" },
  { value: 100, name: "田管" },
  { value: 100, name: "烘烤" },
  { value: 100, name: "收购" },
  { value: 100, name: "调拨" },
];

export default {
  name: "warnNumber",
  data() {
    return {
      option: {},
      columns: Object.freeze(columns),
    };
  },
  mounted() {
    this.initcharts();
  },
  computed: {
    list() {
      return [
        tableData.reduce((result, record) => {
          const column = columns.find((i) => i.title === record.name);
          return {
            ...result,
            [column.dataIndex]: record.value,
          };
        }, {}),
      ];
    },
  },
  methods: {
    initcharts() {
      const chartDom = document.getElementById("warnCharts");
      const myChart = echarts.init(chartDom);
      this.option = {
        title: {
          text: "预警数量",
          textStyle: {},
        },
        legend: {
          position: "right",
          left: "463px",
          top: "30px",
        },
        tooltip: {
          trigger: "item",
          formatter(e) {
            return `${e.name} : ${e.data.value}`; //将他动态设置 name就是名字 values是我给他新添加的真实数据
          },
        },
        series: [
          {
            name: "Funnel",
            type: "funnel",
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "left",
            },
            data: tableData,
          },
        ],
      };
      this.option && myChart.setOption(this.option);
    },
    arrToObj(arr) {
      const data = {};
      arr.forEach((item) => {
        data[item.name] = item.value;
      });
      return data;
    },
  },
};
</script>
<style scoped lang='less'>
.warn-number {
  height: 450px;
  background-color: #fff;
  padding: 2px;
  margin: 3px;
  #warnCharts {
    margin-top: 20px;
    height: 300px;
    margin-top: 10px;
  }
}
</style>
<style>
.ant-table-thead {
  background: #7ecfe2 !important;
}
</style>