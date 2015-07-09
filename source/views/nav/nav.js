app
.controller('NavCtrl', function($scope, FBService) {
  console.log("nav loaded");

  $scope.login = FBService.twitterLogin;
  $scope.logout = FBService.twitterLogout;

  $scope.currentUser = FBService.currentUser;
});
