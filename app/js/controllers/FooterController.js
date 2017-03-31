angular.module('app')
    .controller('FooterController', function($scope, ApiServices) {
            $scope.afficher = function() {
                ApiServices.getAll().then(function(res) {
                    $scope.infoTeams = res.data;
                });
            };
            $scope.afficher();
  });
