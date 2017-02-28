var Vue = require('component_modules/vue.js');
var VueRouter = require('component_modules/vue-router.js');

// 使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

// 页面逻辑
var Home = require('components/page/home/home.js');
var Resume = require('components/page/resume/resume.js');
var QRCode = require('components/page/qrcode/qrcode.js');
var Lab = require('components/page/lab/lab.js');

// components
var Nav = require('components/share/nav/nav.js');
var Footer = require('components/share/footer/footer.js');

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/resume', name: 'resume', component: Resume },
	{ path: '/qrcode', name: 'qrcode', component: QRCode },
	{ path: '/lab', name: 'lab', component: Lab },
	{ path: '*', redirect: '/' }
];

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	el: '#app',
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
	},
	components: {
		'c-nav': Nav,
		'c-footer': Footer
	}
});
