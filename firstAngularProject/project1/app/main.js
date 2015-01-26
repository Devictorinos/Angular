
var app = angular.module('myApp', []);

var apiKey = "MDE3MDI3NTkwMDE0MTMxMzAxMjVlMmJlYw001",
    nprUrl = 'http://api.npr.org/query?id=61&fields=relatedLink,title,byline,text,audio,image,pullQuote,all&output=JSON';

app.factory('audio', ['$document', function ($document) {
    var audio = document.createElement('audio');
    return audio;
}]);


  app.factory('githubService', ['$http', function($http) {

    var doRequest = function(username, path) {
      return $http({
        method: 'JSONP',
        url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
      });
    }
    return {
      events: function(username) { return doRequest(username, 'events'); },
    };
  }]);

  app.controller('ServiceController', ['$scope', 'githubService',
    function($scope, githubService) {
    // Watch for changes on the username property.
    // If there is a change, run the function
    $scope.$watch('username', function(newUsername) {
            // uses the $http service to call the GitHub API
            // and returns the resulting promise
      githubService.events(newUsername)
        .success(function(data, status, headers) {
                    // the success function wraps the response in data
                    // so we need to call data.data to fetch the raw data
          $scope.events = data.data;
        })
    });
}]);

app.directive('nprLink', function(){

    return {
        restrict: 'EA',
        require: ['^ngModel'],
        replace: true,
        scope: {
            ngModel: '=',
            play: '&',
            stop: '&'
        },
        templateUrl: 'view/nprListItem.html',
        link: function (scope, elem, attr) {
            scope.duration = scope.ngModel.audio[0].duration.$text;
        }
    };
});

app.controller('PlayerController',['$scope', '$http', 'audio', function ($scope, $http, audio) {


    $scope.playing = false;
    $scope.audio   = audio;

     $http({

        method: 'JSONP',
        url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success( function (data, status) {

        $scope.programs = data.list.story;
       
    }).error( function (data, status) {

    });

    $scope.play    = function (program) {

        if ($scope.playing) {

            $scope.audio.pause();
        };
       
       
        var url = program.audio[0].format.mp4.$text;

        $scope.audio.src = url;
        $scope.audio.play();
        $scope.playing = true;
    };

    $scope.stop    = function () {
        $scope.audio.pause();
        $scope.playing = false;
    };

    $scope.audio.addEventListener('ended', function () {
        $scope.$apply( function () {
            $scope.stop();
        });
    });

}]);

app.controller('RelatedController', ['$scope', function ($scope) {

}]);


app.controller('MyController', function ($scope) {

    $scope.sayHello = function () {
        alert('Hello Victor');
    }

$scope.roommates = [
  { name: 'Ari'},
  { name: 'Q'},
  { name: 'Sean'},
  { name: 'Anand'}
];

$scope.people = {
  'Ari': 'orange',
  'Q': 'purple',
  'Sean': 'green'
}

/*$scope.clock = new Date();

$timeout(function updateTime() {
$scope.clock = new Date();
$timeout(updateTime, 1000);
}, 1000);*/

    $scope.person = { name: "Victor Lubchuk"};

    var updateClock = function () {

        $scope.clock = new Date();

    };

    var timer = setInterval(function () {
     
            $scope.$apply(updateClock);
        }, 1000);

    updateClock();
});


app.controller('DemoController', function ($scope) {

    $scope.counter = 0;

    $scope.add = function (amount) {

        $scope.counter += amount;
    };

    $scope.subtract = function (amount) {

        if ($scope.counter === 0) {
             return;
        };

        $scope.counter -= amount;
    };
});


