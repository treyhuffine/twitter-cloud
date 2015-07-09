'use strict';

var app = angular.module('twitterCloud', ['ui.router', 'firebase']);

app.controller('MainCtrl', function($scope, $state, $http, urls) {
  $scope.tags = [];
  $scope.tweet = "";
  $scope.search = function() {
    console.log($scope.words);
    $http.post(urls.apiUrl + '/search', { words: $scope.words })
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
    $http.post(urls.apiUrl + '/sendtweet', {tweet: $scope.tweet})
      .success(function(data) {
        console.log(data);
        $scope.tweet = "";
      });
  };
  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
});
