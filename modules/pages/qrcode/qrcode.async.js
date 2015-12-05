var QrCode = require('jquery.plugins/jquery.qrcode');

var Code = {
    render: function($scope){
        var Q = document.getElementById('code-img');

        Q.innerHTML = '';

        new QrCode(Q, {
            text: $scope.inputValue,
            width: 290,
            height: 290
        });
    }
}

return ['$scope', function($scope) {
    // 默认内容
    document.getElementById('input-qrcode').value = 'http://www.wuyuying.com/';
    $scope.inputValue = 'http://www.wuyuying.com/';
    Code.render($scope);
        
    // 监听inputValue变化出二维码
    $scope.$watch('inputValue', function(){
        Code.render($scope);
    });
}];
