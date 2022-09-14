<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <layout />
    </div>
  </div>
</template>
<script>
import layout from './layout/Layout.vue'
export default {
  components:{
    layout
  }
  
}
</script>

<style lang='less'>
#app {
 height: 100%;
 #nav{
  height: 100%;
 }

}


</style>
