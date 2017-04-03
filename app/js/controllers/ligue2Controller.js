angular.module('app')
    .controller('ligue2Controller', function($scope, $timeout, ligue2Service) {


        ligue2Service.getCompetition().then(function(res) {
            $scope.competition = res.data;
            $scope.currentMatchday = res.data.currentMatchday;
            var matchdays = [];
            for (var day = 1; day <= $scope.competition.numberOfMatchdays; day++) {
                matchdays.push(day);
            }
            $scope.competition.numberOfMatchdays = matchdays;
            $scope.update();
        });

        $scope.matchsDay = [];
        $scope.update = function() {
            ligue2Service.getMatchDay($scope.currentMatchday).then(function(res) {
                $scope.matchsDay = res.data.fixtures;

            });
        };
    });
