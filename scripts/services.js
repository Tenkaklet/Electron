var service = angular.module('app');
var client_id = 'c4406f6ecae1bc714e536b66d0bbf74d';

service.factory('Playlist', ['$http', function ($http) {
  var getPlaylist = function (playlist) {
    var playlistUrl = 'https://api.soundcloud.com/playlists/?format=json&client_id=' + client_id;
    return $http.get(playlistUrl)
      .then(function (playResponse) {
        return playResponse.data;
      });
  };
  return {
    findPlaylist: function (playlist) {
      return getPlaylist(playlist);
    }
  };
}]);

service.factory('PlaylistByName', ['$http', function ($http){
  var playName = function (name) {
    var playNameUrl = 'https://api.soundcloud.com/playlists/' + name + '?format=json&client_id=' + client_id;
    return $http.get(playNameUrl)
      .then(function (playName) {
        return playName.data;
      });
  };
  return {
    findName: function (name) {
      return playName(name);
    }
  };
}]);
