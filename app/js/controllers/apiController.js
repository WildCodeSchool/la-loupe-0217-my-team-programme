angular.module('app')
    .controller('ApiController', function($scope, ApiServices) {
            $scope.afficher = function() {
                ApiServices.getAll().then(function(res) {
                    $scope.infoTeams = res.data;
                });
            };
            $scope.afficher();

            $scope.currentId = false;
            $scope.myFunc = function(index,name) {
                $scope.currentId = index;
                $scope.test = (teams.name);
                console.log(test);
            };
          });
