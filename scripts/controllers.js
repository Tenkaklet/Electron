var app = angular.module('app');

SC.initialize({
  client_id: 'c4406f6ecae1bc714e536b66d0bbf74d'
});

app.controller('HomeCtrl', ['$scope', 'PlaylistByName', function ($scope, PlaylistByName) {
  PlaylistByName.findName('operation-pegasus')
  .then(function (res) {
    console.log(res);
  });
}])

.controller('AboutCtrl', ['$scope', function ($scope) {
  console.log($scope + 1);
}]);
