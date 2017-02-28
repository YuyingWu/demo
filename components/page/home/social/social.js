var Vue = require('component_modules/vue.js');
var SocialData = require('social/social.js');

module.exports = Vue.extend({
    // inherit: true, //集成父元素所有属性
    template: __inline('social.html'),
    data: function(){
    	return {
    		list: SocialData
    	}
    },
    filters: {
        toUpperCase: function(value){
            return value.toUpperCase();
        }
    }
});