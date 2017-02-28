var Vue = require('component_modules/vue.js');

module.exports = Vue.extend({
    // inherit: true, //集成父元素所有属性
    template: __inline('lab.html'),
    data: function(){
        return {
            list: [
                {
                    link: '/qrcode',
                    screenshot: 'http://cdn.sinacloud.net/demo-static/img/lab/qrcode.png',
                    title: '二维码生成器'
                }
            ]
        }
    }
});