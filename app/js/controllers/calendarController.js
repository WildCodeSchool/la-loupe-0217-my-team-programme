angular.module('app')
    .controller('calendarController', function($scope, calendarService) {
        calendarService.getAll().then(function(res) {
            $scope.schedule = res.data.fixtures;

        });
    });
