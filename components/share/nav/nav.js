module.exports = {
    template: __inline('nav.html'),
    data: function(){
        return {
            list: [{
                path: '/',
                title: 'Me'
            }, {
                path: '/resume',
                title: 'Resume'
            }, {
                path: '/lab',
                title: 'Lab'
            }],
            isShow: true,
            deviceClass: 'desktop'
        }
    },
    methods: {
        toggleShowValue: function() {
            this.isShow = !this.isShow;
        }
    },
    computed: {
    },
    created: function() {
        var windowWidth = document.body.clientWidth;
        var mobileBreakpoint = 479;

        this.deviceClass = windowWidth > mobileBreakpoint ? 'desktop' : 'mobile';
    }
}