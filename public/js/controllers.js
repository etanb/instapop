var instaPopApp = angular.module('instaPop', []);

instaPopApp.controller('PopularListController', function($timeout, $scope, $http){

  function popularMediaCall () {
    $http.jsonp('https://api.instagram.com/v1/media/popular', {
      params: {
        client_id: '4d5374af01d74b18a3ff5372cdb42567',
        count: 5,
        callback: 'JSON_CALLBACK'
      }
    }).success(function(data) {
      $scope.posts = data.data
    })
  }

  function userMediaCall (userid) {
    $http.jsonp('https://api.instagram.com/v1/users/' + userid + '/media/recent', {
      params: {
        client_id: '4d5374af01d74b18a3ff5372cdb42567',
        count: 9,
        callback: 'JSON_CALLBACK'
      }
    }).success(function(data) {
      $scope.userdatas = data.data
    })
  }

  popularMediaCall()
  $scope.loadPosts = function () {
    console.log("button is firing")
    popularMediaCall()
  }

})