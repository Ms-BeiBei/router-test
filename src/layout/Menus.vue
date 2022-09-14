<template>
  <a-menu mode="inline" @select="onSelect">
    <template v-for="item in menus">
      <a-menu-item :key="item.key" v-if="!item.children.length">
        <span>{{ item.name }}</span>
      </a-menu-item>
      <SubMenu v-else
                :key="item.key"
                :menuInfo="item" />
    </template>
  </a-menu>

</template>
<script>
import { menus } from "../menu/menu";
import SubMenu from './SubMenu.vue'
export default {
  components: {
    SubMenu
  },
  data () {
    return {
      menus,
      rootSubmenuKeys: [],
      openKeys: [],
    };
  },
  methods: {
    onSelect({key}){
      this.$router.push({
        path: key
      })
    }

  }
};
</script>
<style scoped>
</style>
