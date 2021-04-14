<template>
  <div id="app">
<!--     Vue will automatically insert that component inside this placeholder.-->
    <router-view/>
    <FooterGuide v-show="$route.meta.show"/>
  </div>
</template>

<script>
// 简便形式导入只能针对默认暴露的模块
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  // 发送请求可以在 mounted 里面发
  mounted() {
    // 发送 action
    this.$store.dispatch('getAddress')
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
