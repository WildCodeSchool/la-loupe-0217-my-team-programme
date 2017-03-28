angular.module('app')
    .controller('ApiController', function($scope,ApiServices) {
        $scope.afficher = function() {
            ApiServices.getAll().then(function(res) {
                $scope.infoTeams = res.data;
              });
          };
          $scope.afficher();

          $scope.currentId = false;
          $scope.myFunc = function(index) {
              $scope.currentId = index;
              console.log([index]);
                        };
        });
