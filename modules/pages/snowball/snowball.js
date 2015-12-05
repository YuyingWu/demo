module.exports = {
    url: '/snowball',
    template: __inline('./snowball.html'),
    controller : function($scope, $injector) {
        //支持异步加载controller
        require.async('/modules/pages/snowball/snowball.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {
                '$scope': $scope
            });
        });
    }
};
