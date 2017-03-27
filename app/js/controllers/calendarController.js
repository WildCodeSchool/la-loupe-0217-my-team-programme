angular.module('app')
    .controller('calendarController', function($scope, calendarService) {
      console.log('coucou');
        calendarService.getAll().then(function(res) {
            $scope.schedule = res.data.fixtures;
            console.log(res.data);
        });
    });
