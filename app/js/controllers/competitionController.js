
angular.module('app')
    .controller('competitionController', function($scope, competitionService) {
        competitionService.getAll().then(function(res) {
            $scope.schedule = res.data.fixtures;
        });
    });
