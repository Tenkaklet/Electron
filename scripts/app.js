


var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'plangular', 'angularMoment']);

app.config(function ($routeProvider, $locationProvider, plangularConfigProvider) {
  plangularConfigProvider.clientId = 'c4406f6ecae1bc714e536b66d0bbf74d';

  $routeProvider
  .when('/', {
    templateUrl: './scripts/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/results/:search', {
    templateUrl: './scripts/results/results.html',
    controller: 'ResultsCtrl'
  })
  .when('/featured', {
    templateUrl: './scripts/featured/featured.html',
    controller: 'FeaturedCtrl'
  })
  .when('/player/:music', {
    controller: 'playerCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
