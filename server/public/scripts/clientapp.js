var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "homeController"
    })
    .when('/bert', {
      templateUrl: '/views/bert.html',
      controller: "bertController"
    })
    .when('/mary', {
      templateUrl: '/views/mary.html',
      controller: "maryController"
    })
    .when('/dawes', {
      templateUrl: '/views/dawes.html',
      controller: "dawesController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
