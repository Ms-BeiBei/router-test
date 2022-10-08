<template>
  <a-menu mode="inline" @select="onSelect">
    <template v-for="item in routes">
      <a-menu-item :key="item.key" v-if="!item.children.length">
        <span>{{ item.name }}</span>
      </a-menu-item>
      <SubMenu v-else
                :key="item.name"
                :menuInfo="item" />
    </template>
  </a-menu>

</template>
<script>
import SubMenu from './SubMenu.vue'
import { routes } from '../router/index'
export default {
  components: {
    SubMenu
  },
  data () {
    return {
      routes,
      rootSubmenuKeys: [],
      openKeys: [],
    };
  },

  methods: {
   async onSelect({key}){
     await this.$router.push({
        name: key
      })
    }

  }
};
</script>
<style scoped>
</style>
