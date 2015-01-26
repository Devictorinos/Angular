var app = angular.module('TestApp',[]);

app.controller('TestController', function($scope, $timeout){
 
    $scope.clock = new Date();

    $timeout(function updateTime() {
        $scope.clock = new Date();
        $timeout(updateTime, 1000);
    }, 1000);

});

app.controller('FormController', ['$scope', function($scope){
    
    var publish = {};
    $scope.pablisher = {
        person : []
    };
   
    $scope.addPubcisher = function (publish) {
        
        this.publish = publish;
        this.publish.date = new Date();
        
        
        $scope.pablisher.person.push(this.publish);
        this.publish = {};

        console.log($scope.pablisher.person)

    };


}]);