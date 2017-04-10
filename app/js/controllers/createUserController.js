angular.module('app')
    .controller('CreateUserController', function($scope, UserService) {

        $scope.newUser = {
            nom: '',
            prenom: '',
            equipe: '',
            github: '',
            email: ''
        };

        $scope.addStudent = function() {
            UserService.create($scope.newUser).then(function(res) {
                // good
            }, function(err) {
                // bad
            });
        };

    });
