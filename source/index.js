'use strict';

var app = angular.module('twitterCloud', ['ui.router']);

app.controller('MainCtrl', function($scope, $state, $http) {
  $scope.tags = [];
  $scope.search = function() {
    $http.post('http://localhost:8001/search', { words: $scope.words })
    .success(function(data) {
      $scope.tags = data;
    });
  };
  // $http.get('http://localhost:8001/search').success(function(data) {
  //   $scope.tags = data;
  // });
});
