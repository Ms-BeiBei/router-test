<template>
  <div class="user">
    <div class="user-left">
      <UserLeft />
    </div>
    <div class="user-right">
      <UserRight />
    </div>
  </div>
</template>
<script>
import UserLeft from "./userLeft.vue";
import UserRight from "./userRight.vue";
export default {
  name: "user",
  components: { UserLeft, UserRight },
  data() {
    return {};
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style scoped lang='less'>
.user {
  display: flex;
  height: 100%-2px;
  width: 100%;
  background-color: #fff;
  margin: 10px 10px 0 10px;
  &-left {
    width: 25%;
    padding: 10px;
  }
  &-right {
    flex: 1;
    padding: 10px;
  }
}
</style>