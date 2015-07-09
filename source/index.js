'use strict';

var app = angular.module('twitterCloud', ['ui.router', 'firebase']);

app.controller('MainCtrl', function($scope, $state, TweetService) {
  $scope.tags = [];
  $scope.tweet = "";

  $scope.search = function() {
    console.log($scope.words);
    TweetService.search($scope.words)
      .success(function(data) {
        console.log(data);
        $scope.data = data;
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.sendTweet = function() {
    TweetService.sendTweet($scope.tweet)
      .success(function(resp) {
        console.log(resp);
        $scope.tweet = "";
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
});
