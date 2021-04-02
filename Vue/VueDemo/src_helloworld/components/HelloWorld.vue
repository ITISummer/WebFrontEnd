<template>
  <div>
    <h2 class="title">{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    data () { //组件里 data 属性必须是一个函数
      return {
        msg: '第一个Vue组件'
      }
    }
  }
</script>

<style scoped>
  .title {
    color: red;
    background: yellow;
  }
</style>