angular.module('app')
    .controller('competitionController', function($scope, $timeout, competitionService) {


        competitionService.getCompetition().then(function(res) {
            $scope.competition = res.data;
            $scope.currentMatchday = res.data.currentMatchday;
            var matchdays = [];
            for (var day = 1; day <= $scope.competition.numberOfMatchdays; day++) {
                matchdays.push(day);
            }
            $scope.competition.numberOfMatchdays = matchdays;
            $scope.update();
        });

<<<<<<< HEAD
        $scope.data = {
      model: null,
      availableOptions: [
        {id: (match.homeTeamName) (match.result.goalsHomeTeam) , name: 'Journée 1'},
        {id: '2', name: 'Journée 2'},
        {id: '3', name: 'Journée 3'}
      ]
              };
  });
=======
        $scope.matchsDay = [];
        $scope.update = function() {
            competitionService.getMatchDay($scope.currentMatchday).then(function(res) {
                $scope.matchsDay = res.data.fixtures;

            });
        };
    });
>>>>>>> 867f9604f4f5db5622fbfff3939d923b7cc8e8da
