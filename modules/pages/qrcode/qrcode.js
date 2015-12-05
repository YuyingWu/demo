module.exports = {
    url: '/qrcode',
    template: __inline('./qrcode.html'),
    controller : function($scope, $injector) {
        //支持异步加载controller
        require.async('/modules/pages/qrcode/qrcode.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {
                '$scope': $scope
            });
        });
    }
};
