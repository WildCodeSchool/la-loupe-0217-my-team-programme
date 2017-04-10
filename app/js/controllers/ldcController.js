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
                $scope.matchsDay.forEach(function(match){
                  var idHome = match._links.homeTeam.href.match(/\/([^\/]+)\/?$/)[1];
                  var idAway = match._links.awayTeam.href.match(/\/([^\/]+)\/?$/)[1];
                  console.log('home',idHome);
                  console.log('away',idAway);

                  ldcService.getOne(idHome).then(function(res) {
                      match.logoHomeTeam = res.data.crestUrl;
                  });

                  ldcService.getOne(idAway).then(function(res) {
                      match.logoAwayTeam = res.data.crestUrl;
                  });
                });
            });
        };
    });
