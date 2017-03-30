angular.module('app')
    .controller('ApiController', function($scope,ApiServices) {
        $scope.afficher = function() {
            ApiServices.getAll().then(function(res) {
                $scope.infoTeams = res.data;
              });
          };
          $scope.afficher();

    $scope.myFunc = function(evt, logo2) {
                console.log("logo2");
                $scope.currentId = teams;

            };
            
    });
