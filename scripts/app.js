


var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './scripts/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: './scripts/about/about.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
