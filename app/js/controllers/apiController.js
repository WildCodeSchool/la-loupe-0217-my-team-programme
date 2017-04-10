angular.module('app')
    .controller('ApiController', function($scope, UserService, CurrentUser, ApiServices) {
        $scope.afficher = function() {
            ApiServices.getAll().then(function(res) {
                $scope.infoTeams = res.data;

            });
        };
        $scope.afficher();

        $scope.teamUser =[];
        $scope.currentId = false;

        $scope.myFunc = function(index) {
            if ($scope.teamUser.indexOf(index) != -1) {
                $scope.teamUser.splice($scope.teamUser.indexOf(index), 1);
            } else {
                $scope.teamUser.push(index);
            }

        };
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.teamUser = res.data.teams;

            console.log($scope.teamUser);
        });

        $scope.updateTeams = function() {
          UserService.updateTeams(CurrentUser.user()._id, $scope.teamUser).then(function(res) {
            console.log(res);
          });
        };

        $scope.isSelected = function(id) {
            return $scope.teamUser.indexOf(id) == -1;
        };

    });
