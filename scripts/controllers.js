var app = angular.module('app');

// SC.initialize({
//   client_id: 'c4406f6ecae1bc714e536b66d0bbf74d',
//   redirect_uri: 'http://localhost:3333/#!/callback.html'
// });

app.controller('searchCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {

  // This grabs the input and then will then display artist, track, playlist on seperate page.
    $scope.search = function (data) {
    console.log(data);
    $location.path('/results/' + data);
  };
}])

.controller('HomeCtrl', ['$scope', 'PlaylistByName', '$location', function ($scope, PlaylistByName, $location) {


}])

.controller('ResultsCtrl', ['$scope', '$routeParams', '$location', '$rootScope', 'Soundcloud', function ($scope, $routeParams, $location, $rootScope, Soundcloud) {
  console.log($routeParams);
  $scope.searched = $routeParams.search;
  // Get the Tracks
  Soundcloud.track($routeParams.search)
  .then(function (res) {
    console.log('TRACKS --> ', res);
  });

  // Get the Playlists
  Soundcloud.playlist($routeParams.search)
  .then(function (res) {
    console.log('PLAYLISTS --> ', res);
  });

  // Get the Users
  Soundcloud.user($routeParams.search)
  .then(function (res) {
    console.log('USERS --> ', res);
  });
}])

.controller('FeaturedCtrl', ['$scope', 'Playlist', '$rootScope', 'query', 'Soundcloud', function ($scope, Playlist, $rootScope, query, Soundcloud) {
  Soundcloud.featuredPlaylist()
      .then(function (playlist) {
          $scope.playlist = playlist;
          for (var x in playlist) {
            if (playlist[x].artwork_url != 'null') {
              $scope.image = '../images/soundcloud.png';
            }
          }
          $scope.gotTo = function (playlist) {
            console.log(playlist.permalink_url);
            query.name = playlist.permalink_url;
            // $rootScope.music = playlist.permalink_url;
            $rootScope.music = playlist;
            $rootScope.content = true;
          };
      });
}])

.controller('playerCtrl', ['$scope', 'PlaylistByName', '$location', '$rootScope', 'query', function ($scope, PlaylistByName, $location, $rootScope, query) {
  // $rootScope.content = true;
  $scope.start = function () {
    $scope.link = 'http://soundcloud.com/maria-da-paz-oliveira/sets/funk';
  };
  $scope.$watch('music', function (input) {
    console.log(input);
    console.log(query.name);
    // query.name = $scope.link;
    // $scope.link = input;

  });
  $scope.close = function () {
    $rootScope.content = false;
  };
}]);
