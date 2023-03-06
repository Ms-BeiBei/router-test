<template>
    <a-spin class="basic-container" :spinning="spinning">
      <div class="basic-container__header">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
  
      <div class="basic-container__content" ref="content">
        <slot v-bind="{height}"></slot>
      </div>
    </a-spin>
  </template>
  
  <script>
  export default {
    name: 'BasicContainer',
    props:{
      title:String,
      spinning:Boolean,
    },
    data(){
      return {
        height: 0,
      };
    },
    mounted(){
      this.getHeight();
      window.onresize = () => {
        this.getHeight();
      };
    },
    methods:{
      getHeight(){
        this.$nextTick(() => {
          this.height = this.$refs['content'].clientHeight;
        });
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .basic-container{
    background: #ffffff;
    box-shadow: 0px 0px 20px rgb(152 161 179 / 20%);
    border-radius: 12px;
    padding:10px 15px;
    height:100%;
    height: 350px;
    min-height: 300px;
    width: 100%;
    position: relative;
    /deep/ .ant-spin-container{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
     
  
    }
      &__header{
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        line-height: 32px;
      }
      &__content{
        padding-top: 15px;
        flex: 1;
        height: 0;
        overflow: auto;
      }
  }
  </style>
  