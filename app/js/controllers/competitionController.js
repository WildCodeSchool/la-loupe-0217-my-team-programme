
angular.module('app')
    .controller('competitionController', function($scope, competitionService) {
        competitionService.getAll().then(function(res) {
            $scope.schedule = res.data.fixtures;
        });

        $scope.data = {
      model: null,
      availableOptions: [
        {id: (match.homeTeamName) (match.result.goalsHomeTeam) , name: 'Journée 1'},
        {id: '2', name: 'Journée 2'},
        {id: '3', name: 'Journée 3'}
      ]
              };
  });
