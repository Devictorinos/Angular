angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {

    $scope.username = 'Victor';

    $scope.sayHello = function () {
        $scope.greeting = ' Hello ' + $scope.username + ' !';
    };

}])
.controller('MyController2', ['$scope', function($scope) {
    
    $scope.username = 'Victor';

    $scope.sayHello = function () {
        $scope.greeting = ' Hello ' + $scope.username + ' !';
    };

}]);

