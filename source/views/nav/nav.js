app
.controller('NavCtrl', function($scope, FBService) {
  $scope.login = FBService.twitterLogin;
  $scope.logout = FBService.twitterLogout;

  $scope.currentUser = FBService.currentUser;
});
