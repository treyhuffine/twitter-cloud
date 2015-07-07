'use strict';

var app = angular.module('twitterCloud', ['ui.router']);

app.controller('MainCtrl', function($scope, $state, $http) {
  $http.get('http://localhost:8001/search').success(function(data) {
    $scope.tags = data;
  })
});
