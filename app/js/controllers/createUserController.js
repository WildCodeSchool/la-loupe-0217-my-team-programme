angular.module('app')
  .controller('creatUserController', function($scope, UserCreateService) {

    $scope.newUser = {
      firstname: '',
      lastname: '',
      pseudo: '',
      email: ''
    };

    $scope.addUser = function () {
      UserCreateService.create($scope.newUser).then(function (res) {
        // good
      }, function (err) {
        // bad
      });
    };

  });
