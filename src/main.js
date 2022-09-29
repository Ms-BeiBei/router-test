import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)


Vue.config.productionTip = false

store.dispatch("add") //一般在组件中写，this.$store 调用

console.log(store, 111)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
