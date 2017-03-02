<template>
  <div id="app" class="app" :class="'app-' + $route.name">
    <c-nav></c-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Common/Nav/Nav';

export default {
  name: 'app',
  components: {
    'c-nav': Nav,
  },
};
</script>

<style lang="less">
@import "assets/css/app.less";
</style>
