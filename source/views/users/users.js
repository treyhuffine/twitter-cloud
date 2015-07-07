'use strict';

angular.module('twitterCloud')
.controller('UsersCtrl', function($scope, $state){
  console.log('user ctrl online');

  $scope.name = $state.current.name.split('.')[1];

  $scope.submit = function(user){
    console.log(user);
  };
});
