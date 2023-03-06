<template>
    <div class="legend-item">
      <div class="legend-item__top">
        <span
          class="legend-item-circle"
          :style="{ backgroundColor: color }"
        ></span>
        <span class="legend-item-name">{{ title }}</span>
        <span class="legend-item-subtitle">{{ subTitle }}</span>
      </div>
      <div class="legend-item__bottom">
        <span class="legend-item-total">{{ total || 0 }} {{ unit }}</span>
        <span class="legend-item-per" :style="{ color: color }">
          {{ per || 0 }} %
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LegendItem",
    props: {
      color: String,
      title: String,
      subTitle: {
        type: String,
        default: "",
      },
      per: [Number, String],
      total: [Number, String],
      unit: {
        type: String,
        default: "条",
      },
    },
  };
  </script>
  
  <style lang="less" scoped>
  .legend-item {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    &__bottom {
      padding-left: 17px;
    }
    &-circle {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
    &-name {
      font-size: 14px;
      color: #333333;
      font-weight: 600;
    }
    &-per {
      width: 40px;
      font-weight: 600;
    }
    &-total {
      font-size: 14px;
      color: #333333;
      font-weight: 600;
    }
    &-subtitle {
      font-size: 12px;
      font-weight: 400;
      color: #9ba8c2;
      margin-left: 5px;
    }
  }
  </style>
  