<template>
  <div>
    <img src="./assets/logo.png" alt="logo" class="logo">
    <HelloWorld/> //加载 HelloWorld 组件的内容
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
