<template>
  <a-sub-menu :key="menuInfo.name" v-bind="$props" v-on="$listeners">

    <template v-slot:title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children">
      <a-menu-item :key="item.name"
                   v-if="!item.children.length">

        {{ item.meta.title }}
      </a-menu-item>
      <SubMenu :menu-info="item"
               :key="item.name"
               v-else />
    </template>
  </a-sub-menu>
</template>

<script>
import { Menu } from 'ant-design-vue';
export default {
  name: 'SubMenu',
  props: {
     ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>