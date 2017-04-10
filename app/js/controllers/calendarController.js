angular.module('app')
    .controller('calendarController', function($scope, CurrentUser, UserService, ApiServices) {

        $scope.calendar = [];

        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            var teams = res.data.teams;
            teams.forEach(function(team) {
                ApiServices.getCalendar(team).then(function(res) {
                    res.data.fixtures.forEach(function(match) {
                        ApiServices.getOne(match.homeTeamId).then(function(res) {
                            match.logoHomeTeam = res.data.crestUrl;

                            ApiServices.getOne(match.awayTeamId).then(function(res) {
                                match.logoAwayTeam = res.data.crestUrl;
                                $scope.calendar.push(match);

                            });
                        });

                    });
                }, function(err) {
                    // error
                });
            });
            console.log($scope.calendar);
        }, function(err) {
            // error
        });

        var logoOf = function(id) {
            ApiServices.getOne(id).then(function(res) {
                return res.data.crestUrl;
            });
        };

    });
