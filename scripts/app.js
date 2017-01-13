


var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'plangular']);

app.config(function ($routeProvider, $locationProvider, plangularConfigProvider) {
  plangularConfigProvider.clientId = 'c4406f6ecae1bc714e536b66d0bbf74d';
  
  $routeProvider
  .when('/', {
    templateUrl: './scripts/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: './scripts/about/about.html',
    controller: 'AboutCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
