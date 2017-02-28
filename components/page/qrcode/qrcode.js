var Vue = require('component_modules/vue.js');
var QRious = require('qrious.js');

module.exports = Vue.extend({
    // inherit: true, //集成父元素所有属性
    template: __inline('qrcode.html'),
    data: function(){
    	return {
    		link: 'http://wuyuying.com/'
    	}
    },
    methods: {
    	renderQR: function(){
    		new QRious({
    			element: this.$refs.qrContainer,
          		value: this.link,
          		size: 300
    		});
    	},
    	linkChanged: function(){
    		this.renderQR();
    	}
    },
    mounted: function(){
    	this.renderQR();
    }
});