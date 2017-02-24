var Vue = require('component_modules/vue.js');
var VueRouter = require('component_modules/vue-router.js');

// 使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 页面逻辑
const NotFound = { template: '<div>not found</div>' };
var Home = require('components/page/home/home.js');
var Resume = require('components/page/resume/resume.js');

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/resume', name: 'resume', component: Resume },
  { path: '*', name: 'not-found', component: NotFound }
];

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	router: router,
	methods: {
		bodyClass: function(){
			document.getElementsByTagName('body')[0].className = 'body-' + this.$route.name;
		}
	},
	beforeMount: function(){
		this.bodyClass();
	},
	updated: function(){
		this.bodyClass();
	}
}).$mount('#app');
