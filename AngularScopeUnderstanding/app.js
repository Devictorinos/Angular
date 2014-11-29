var app = angular.module('scopeExample', []);

app.controller('MyController', ['$scope', function($scope) {

    $scope.username = 'Victor';

    $scope.sayHello = function () {
        $scope.greeting = ' Hello ' + $scope.username + ' !';
    };

}]);

app.controller('MyController2', ['$scope', function($scope) {
    
    $scope.username = 'Victor';

    $scope.sayHello = function () {
        $scope.greeting = ' Hello ' + $scope.username + ' !';
    };

}]);

