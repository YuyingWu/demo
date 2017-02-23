var Vue = require('component_modules/vue.js');
var Router = require('component_modules/director.js').Router;

// 页面逻辑
var Home = require('components/page/home/home.js');

window.app = new Vue({
    el: '#app',
    data: {
        'currentView' : 'home' //默认首页
        /*'type'  : '',
        'cate'  : '',
        'article_id' : ''*/
    },
    components: {
        'home' : Home
    }
});

var router = new Router();

//首页
router.on('/home', function (cate){
    app.currentView = 'home';
});

//页面未找到
router.configure({
  notfound: function () {
    router.setRoute('/home');
  }
})

//默认首页
router.init('/home');
