<template>
  <div>
    <FullscreenModal
      :visible.sync="visible"
      title="1111"
      @ok='OK'
    />

    <a-button @click="open">11111</a-button>
  
  </div>
</template>
<script>
import FullscreenModal from "@/components/FullscreenModal";
export default {
  components: {
    FullscreenModal,
  },
  data() {
    return {
      visible: false,
    };
  },
  created(){
   
  },
  methods: {
    open() {
      this.visible = true;
    },
    OK() {
      this.visible = false;
    },
   
  },
};
</script>
<style scoped>
</style>
