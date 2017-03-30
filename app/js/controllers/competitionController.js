angular.module('app')
.controller('competitionController', function($scope, competitionService) {


        competitionService.getCompetition().then(function(res) {
            $scope.competition = res.data;
            $scope.currentMatchday = res.data.currentMatchday;
            var matchdays = [];
            for(var day = 1; day <= $scope.competition.numberOfMatchdays; day++) {
              matchdays.push(day);
            }
            $scope.competition.numberOfMatchdays = matchdays;
    });

    $scope.matchsDay = [];


    $scope.$watch('currentMatchday', function (newValue, oldValue) {
      if(newValue != oldValue) {
        competitionService.getMatchDay(newValue).then(function(res) {
            $scope.matchsDay = res.data.fixtures;
            console.log('coucou');
        });
      }
  });


});
