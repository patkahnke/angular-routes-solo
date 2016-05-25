myApp.controller('maryController', ['$scope', function ($scope) {
  console.log('Mary controller running');
  $scope.firstName = 'Mary',
  $scope.lastName = 'Poppins',
  $scope.message = 'The BOMB!',
  $scope.myVar = false;
  $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
  };
}]);
