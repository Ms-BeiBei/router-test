<template>
  <div>
    用户中心--- {{ $store.state.test }}---
    ---{{ count1 }}-
    -{{ count2 }}--
    -{{count3}}---
    处理完的长度是---{{ doneTodosCount }}

    <div @click="add1">add</div>
    <div @click="test2">test2</div>
    <div @click="test">test</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      localCount: 10,
    };
  },
  computed: mapState({
    count1: (state) => state.test, // mapState 接受一个对象  key  是将要 绑定的 方法名字， value  是vuex 中 state 的处理
    count2: (state) => state.test + 1,
    count3: (state) => state.test + state.test + 1,
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  }),

  created() {
    console.log(this.$store.getters.doneTodos,9999);
  },
  methods: {
    // ...mapMutations(["add", "test"]),//也可以写成数组
    ...mapMutations({
      //mapMutations 接受一个对象  key  是将要 绑定的  方法名字， value  是vuex 中 mutations 的方法
      add1: "add",
      test2: "test",
      test: "test",
    }),
  },
};
</script>
<style scoped>
</style>