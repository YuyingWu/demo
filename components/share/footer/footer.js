var SocialData = require('social/social.js');

module.exports = {
    template: __inline('footer.html'),
    data: function(){
        return {
            year: (new Date()).getFullYear(),
            list: SocialData
        }
    }/*,
    methods: {
        toggleShowValue() {
            this.isShow = !this.isShow;
        }
    },
    computed: {
    },
    created() {
        var windowWidth = document.body.clientWidth;
        var mobileBreakpoint = 479;

        this.deviceClass = windowWidth > mobileBreakpoint ? 'desktop' : 'mobile';
    }*/
}