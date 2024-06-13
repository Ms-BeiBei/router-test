<template>
    <BasicContainer
      title="沟通整体统计"
      class="plan-purchase"
      :spinning="spinning"
    >
      <div class="plan-purchase__wrapper">
        <EchartsContainer :options="options" width="250px" height="270px" />
        <div class="plan-purchase__wrapper-right">
          <LegendItem
            v-for="(item, index) in legendright"
            :key="index"
            :color="item.itemStyle.color"
            :title="item.name"
            :total="item.value"
            :per="getPer(item.value)"
          />
        </div>
      </div>
    </BasicContainer>
  </template>
  
  <script>
  import BasicContainer from "../../component/basic-container.vue";
  import EchartsContainer from "../../component/echarts-container.vue";
  import LegendItem from "../../component/legend-item.vue";
  import { set, round, get } from "lodash";
  import { color } from "../../component/settings";
  
  export default {
    name: "PlanPurchase",
    components: {
      BasicContainer,
      EchartsContainer,
      LegendItem,
    },
    props: {
      leafConnectRectify: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        spinning: false,
      };
    },
    created() {
      this.init();
    },
    computed: {
      options() {
        const subtext = this.leafConnectRectify.totalSum;
        return {
          title: {
            text: "总数",
            textStyle: {
              fontSize: 12,
            },
            subtext,
            subtextStyle: {
              fontSize: 16,
            },
            top: "center",
            left: "center",
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "70%"],
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
  
              labelLine: {
                show: false,
              },
              data: [
                { total: this.leafConnectRectify.reformNum, name: "整改通知单" },
                { total: this.leafConnectRectify.steeringNum, name: "沟通单" },
              ],
            },
          ],
        };
      },
      legendright() {
        return get(this.options, "series[0].data", []);
      },
      optionsData() {
        return [
          { total: this.leafConnectRectify.reformNum, name: "整改通知单" },
          { total: this.leafConnectRectify.steeringNum, name: "沟通单" },
        ];
      },
    },
    methods: {
      async init() {
        try {
          this.spinning = true;
          const { list } = this.getOptions(this.optionsData);
          // 存数据
          set(this.options, "series[0].data", list);
        } finally {
          this.spinning = false;
        }
      },
      getOptions(data) {
        const list = data || [];
        // 后端可能返回 N多条数据,前端 UI  展示 6条，如果后端返回大于六条，排序后，超过前6的 自动与第六条合并成 其它类
        const sortList = list
          .sort((a, b) => b.total - a.total)
          .reduce(
            (result, record, index) => {
              const { total, name } = record;
              if (index < 6) {
                result.list.push({
                  value: total || 0,
                  name: index === 5 && list.length > 6 ? "其它站" : name,
                  // 自定义颜色 与  右侧 颜色统一
                  itemStyle: {
                    color: color[index],
                  },
                });
              } else {
                result.list[5].value += total || 0;
              }
  
              result.total += total || 0;
  
              return result;
            },
            {
              list: [],
              total: 0,
            }
          );
  
        return sortList;
      },
      getPer(value) {
        const total = get(this.options, "title.subtext") || 0;
        return round((value / total) * 100);
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .plan-purchase {
    &__wrapper {
      height: 100%;
      display: flex;
      & > .echarts-container {
        flex: 1;
      }
      & > &-right {
        padding: 45px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
  </style>
  