angular.module('app')
    .controller('calendarController', function($scope, calendarService, CurrentUser, UserService) {

        $scope.calendar = [];

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            var teams = res.data.teams;
            teams.forEach(function(team) {
                calendarService.getCalendar(team).then(function(res) {
                  res.data.fixtures.forEach(function(match){
                    $scope.calendar.push(match);
                  })

                }, function(err) {
                    // error
                });
            });
            console.log($scope.calendar);
        }, function(err) {
            // error
        });
    });
