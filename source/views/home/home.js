angular.module('twitterCloud')
  .controller('HomeCtrl', function($scope, Testdata) {
    $scope.data = TestData.testData;
    console.log($scope.data);
  });
