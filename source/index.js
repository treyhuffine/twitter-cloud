'use strict';

var app = angular.module('twitterCloud', ['ui.router']);

app.controller('MainCtrl', function($scope, $state, $http) {
  $scope.tags = [];
  $scope.tweet = "";
  $scope.search = function() {
    console.log($scope.words);
    $http.post('http://localhost:8001/search', { words: $scope.words })
    .success(function(data) {
      console.log(data);
      $scope.data = data;
    })
    .catch(function(error) {
      console.log(error);
    });

    return false;
  };
  $scope.sendTweet = function() {
    $http.post('http://localhost:8001/sendtweet', {tweet: $scope.tweet})
      .success(function(data) {
        console.log(data);
        $scope.tweet = "";
      });
  };
  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
});
