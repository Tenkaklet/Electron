var app = angular.module('app');

SC.initialize({
  client_id: 'c4406f6ecae1bc714e536b66d0bbf74d',
  redirect_uri: 'http://localhost:3333/#!/callback.html'
});

app.controller('HomeCtrl', ['$scope', 'PlaylistByName', function ($scope, PlaylistByName) {

  SC.connect()
  .then(function() {
    return SC.get('/me');
  })
  .then(function(me) {
    console.log(me);
    alert('Hello' + me.username);
  });



  PlaylistByName.findName('operation-pegasus')
  .then(function (res) {
    console.log(res);
  });
}])

.controller('AboutCtrl', ['$scope', function ($scope) {
  console.log($scope + 1);
}]);
