// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //申明使用 vue-router
import store from './store' //申明使用 vuex

Vue.config.productionTip = false // 防止 “you’re in development mode” 提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 使用 vue-router
  store,  // 使用 vuex
  render: h => h(App)//将其渲染进 index.html id=app 的标签中
})
