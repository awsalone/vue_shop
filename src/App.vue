<template>
  <div id="app">
    <router-view />
    <FootGuild v-show="$route.meta.showFooter"></FootGuild>
  </div>
</template>
<script>
import FootGuild from './component/FootGuild/FootGuild'
export default {
  components: {
    FootGuild
  }
}
</script>
<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
