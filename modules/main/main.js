angular.module('Salute', ['ui.router'/*, 'ngCookies'*/]);

require('router');

/**
 * Master Controller
 */

angular.module('Salute').controller('MasterCtrl', function ($scope, $location) {
    $scope.hash = 'http://' + $location.$$host;

    if($location.$$port){
        $scope.hash += ':' + $location.$$port;
    }

    $scope.hash += '/#/';

    /*$scope.activeNav = function(){
        
    }

    // nav
    $('.nav').on('click', 'li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });*/

    // AV.initialize('QP6zOaCyxLpdNmVpllkwCJ5R', 'tDmvwwEF4yuVQDqPkYETzfet');
    /**
     * Sidebar Toggle & Cookie Control
     */
    /*var mobileView = 992;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };*/
});
