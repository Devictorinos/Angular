angular.module('App', [])

.controller('CTRL',['$scope', '$compile', '$rootScope', function($scope, $compile, $rootScope) {
  $scope.addVal = function(v) {
    var btn = $compile('<btn val="{{val}}"></btn>')($scope);
    angular.element(document.getElementById('holder')).append(btn);
   
  };
}])

.directive('btn', [function($scope) {
  return {

    restrict: 'E',
    scope: {
      'val': '@'
    },
    trunsclude: true,
    template: ['<button>{{val}}</button>'],
    link: function(scope, elem, attrs) {
      elem.on('click', function() {
        alert(attrs.val);
      });
    }
  };
}]);
