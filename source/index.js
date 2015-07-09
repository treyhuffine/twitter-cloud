'use strict';

var app = angular.module('twitterCloud', ['ui.router', 'firebase']);

app.controller('MainCtrl', function($scope, $state, $http, urls, TweetService) {
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

    return false;
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
    return false;
  };
  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + " " + tag;
  };
  $scope.followUser = function(screenName) {
    TweetService.follow(screenName)
      .success(function(data) {
        console.log(data);
        $scope.data.users[screenName].following = true;
      })
      .catch(function(error) {
        console.log(error);
      });

    return false;
  };
});
