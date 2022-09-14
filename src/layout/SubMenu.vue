<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">

    <template v-slot:title>{{ menuInfo.name }}</template>
    <template v-for="item in menuInfo.children">
      <a-menu-item :key="item.key"
                   v-if="!item.children.length">

        {{ item.name }}
      </a-menu-item>
      <SubMenu :menu-info="item"
               :key="item.key"
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