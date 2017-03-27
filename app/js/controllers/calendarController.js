angular.module('app')
    .controller('calendarController', function($scope, calendarService) {
        $scope.afficher = function() {
            calendarService.getAll().then(function(res) {
                $scope.schedule = res.data.fixtures;

            });
        };
        $scope.afficher();
    });
