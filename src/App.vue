<template>
  <div id="app" class="app" :class="'app-' + $route.name">

    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less">
@import "assets/css/app.less";
</style>
