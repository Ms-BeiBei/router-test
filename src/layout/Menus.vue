<template>
  <a-menu mode="inline" @select="onSelect">
    <template v-for="item in routes">
      <a-menu-item :key="item.key" v-if="!item.children.length">
        <span>{{ item.name }}</span>
      </a-menu-item>
      <SubMenu v-else :key="item.name" :menuInfo="item" />
    </template>
  </a-menu>
</template>
<script>
import SubMenu from "./SubMenu.vue";
import { routes } from "../router/index";
export default {
  components: {
    SubMenu,
  },
  data() {
    return {
      routes,
      rootSubmenuKeys: [],
      openKeys: [],

      datatotal: {
        title: "登录日志",
        table: {
          height: 200,
          border: true,
          columns: [
            {
              label: "A",
              prop: "a",
              visible: false,
              /**
               * @default false
               * left | right
               */
              fixed: true,
            },
            {
              label: "B",
              prop: "b",
              fixed: "right",
            },
            {
              label: "B",
              prop: "b",
            },
          ],
          /**
           * @default {page:1,size:10}
           *
           */
          pagination: true,
        },
      },
    };
  },

  methods: {
    async onSelect({ key }) {
      await this.$router.push({
        name: key,
      });
    },
  },
};
</script>
<style scoped>
</style>
