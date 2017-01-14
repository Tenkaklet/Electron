var app = angular.module('app');

SC.initialize({
  client_id: 'c4406f6ecae1bc714e536b66d0bbf74d',
  redirect_uri: 'http://localhost:3333/#!/callback.html'
});

app.controller('searchCtrl', ['$scope', '$location', function ($scope, $location) {

  // This grabs the input and then will then display artist, track, playlist on seperat page.
    $scope.search = function (data) {
    console.log(data);
    $location.path('/results/' + data);
  };
}])

.controller('HomeCtrl', ['$scope', 'PlaylistByName', function ($scope, PlaylistByName) {

  PlaylistByName.findName('operation-pegasus')
  .then(function (res) {
    console.log(res);
  });

}])

.controller('ResultsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  console.log($routeParams);
}])

.controller('FeaturedCtrl', ['$scope', 'Playlist', function ($scope, Playlist) {
  Playlist.findPlaylist()
      .then(function (playlist) {
          console.log(playlist);
          $scope.playlist = playlist;
      });
}]);
