module.exports = {
    data: function(){
        return {
            list: [{
                path: '/',
                title: 'Me'
            }, {
                path: '/resume',
                title: 'Resume'
            }]
        }
    },
    template: __inline('nav.html')
}