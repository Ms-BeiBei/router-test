<template>
  <div class="container" v-loading="loading">
    <div title="收缩侧边栏" class="container-left" @mousedown="onMousedown" @mousemove="onMousemove" @mouseup="onMouseup"
      ref="container-left">
      {{ $store.state.system.a }}
      {{ $store.state.user.b }}
      {{ $store.getters.bit }}
      {{ bit }}
      {{ sadasd }}
      {{ nn }}

      <button @click="onClick">点击</button>
      <button @click="onClickAsync">异步点击</button>
    </div>
    <div class="container-right"></div>
  </div>
</template>
<script>
import { mapState, mapGetters,mapMutations  } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      visible: false,
      isMove: false,
      static: {},
      loading:false
    };
  },
  computed: {
    ...mapState({
      nn: (state) => {
        return state.system.a
      }
    }),
    ...mapGetters(["bit"]),
    ...mapGetters({
      sadasd:'bit'
    })
  },


  methods: {
    ...mapMutations ({
      onClick:'increment'
    }),
    async onClickAsync(){
      this.loading = true
      await this.$store.dispatch('incrementAsync')
      this.loading = false

      
    },
    // onClick(){
    //   this.$store.commit('increment')
    // },
    onMousedown(el) {
      this.static = el;
      this.isMove = true;
    },
    onMousemove(el) {
      if (this.isMove) {
        const offset = el.offsetX - this.static.offsetX;
        console.log(offset);
        this.$refs["container-left"].style.width = `${300 + offset}px`;
      }
    },
    onMouseup() {
      this.isMove = false;
    },
  },
};
</script>
<style scoped lang='less'>
.container {
  display: flex;
  height: 100%;

  &-left {
    width: 300px;
    min-width: 200px;
    height: 100%;
    background-color: #fff;
  }

  &-right {
    flex: 1;
  }
}


//拖拉样式
// .resize {
//   cursor: col-resize;
//   float: right;
//   position: relative;
//   top: 15%;
//   background-color: #d6d6d6;
//   border-radius: 5px;
//   margin-top: -10px;
//   width: 10px;
//   height: 50px;
//   background-size: cover;
//   background-position: center;
//   /*z-index: 99999;*/
//   font-size: 32px;
//   color: white;
// }
// /*拖拽区鼠标悬停样式*/
// .resize:hover {
//   color: #444444;
// }
</style>
