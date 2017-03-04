// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/*eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch: {
    $route: (to, from) => {
      document.getElementsByTagName('body')[0].className = 'body-' + to.name;
    },
  },
});
/*eslint-enable */
