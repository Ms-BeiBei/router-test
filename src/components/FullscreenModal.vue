<template>
  <a-modal
    v-model="currentVisible"
    :closable="true"
    v-on="$listeners"
    v-bind="$attrs"
    cancelText='返回'
    :wrapClassName="fullscreen ? 'user-modal--fullscreen' : ''"
  >
    <template v-slot:closeIcon>
      <a-icon
        :type="fullscreen ? 'shrink' : 'arrows-alt'"
        @click.stop="toggleFullscreen"
      />
    </template>
    <slot name='content'></slot>
  </a-modal>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    visible: Boolean,
    defaultFull: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      fullscreen: this.defaultFull,
    };
  },
  computed: {
    currentVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      },
    },
  },

  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    },
    handleCancel(){
      this.visible=false
    }
  },
};
</script>

<style lang="less">
.user-modal--fullscreen {
  .ant-modal {
    width: 100vw !important;
    max-width: 100vw !important;
    top: 0;
    padding-bottom: 0;
  }
  .ant-modal-body {
    height: calc(100vh - 55px - 53px);
    overflow-y: auto;
  }
}
</style>
