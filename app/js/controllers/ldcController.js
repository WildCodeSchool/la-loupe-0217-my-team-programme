angular.module('app')
    .controller('ldcController', function($scope, $timeout, ldcService) {


        ldcService.getCompetition().then(function(res) {
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
            ldcService.getMatchDay($scope.currentMatchday).then(function(res) {
                $scope.matchsDay = res.data.fixtures;

            });
        };
    });
