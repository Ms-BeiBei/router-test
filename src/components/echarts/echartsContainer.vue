<template>
    <div :id="id" :ref="id" class="echarts-container"></div>
  </template>
  
  <script>
  import { v4 } from "uuid";
  import * as echarts from "echarts";
  import { merge, isEmpty, debounce } from "lodash";
  import { color } from "./settings";
  
  export default {
    name: "EchartsContainer",
    props: {
      renderer: {
        type: String,
        default: "svg",
      },
      options: Object,
      width:{
        type:String,
        default:"100%"
      },
      height:{
        type:String,
        default:"100%"
      },
      
    },
    data() {
      return {
        id: v4(),
        instance: null,
        baseOptions: {
          tooltip: {
            trigger: "item",
          },
          grid: {
            containLabel: true,
            left: 40,
            right: 30,
            bottom: 0,
            top: 30,
          },
          color,
        },
      };
    },
    mounted() {
      this.init();
      window.onresize = debounce(() => {
        this.instance && this.instance.resize();
      }, 100);
    },
    destroyed() {
      this.instance && this.instance.dispose();
    },
    methods: {
      init() {
        this.$nextTick(() => {
          this.instance = echarts.init(this.$refs[this.id], null, {
            renderer: this.renderer,
            width: this.width,
            height:this.height,
          });
  
          this.$watch(
            "options",
            (val) => {
              if (!isEmpty(val) && this.instance) {
                this.instance.setOption(
                  merge({}, this.baseOptions, this.options)
                );
              }
            },
            {
              deep: true,
              immediate: true,
            }
          );
        });
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .echarts-container {
    // width: 100%;
   // height: 100%;
  }
  </style>
  