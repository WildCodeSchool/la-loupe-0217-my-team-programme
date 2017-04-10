var API = 'df36d6362f7842128c30322f9605de88';
var myApp = angular.module('app')
    .service('ligue2Service', function($http) {
        return {
            getCompetition: function() {
                return $http.get(' http://api.football-data.org/v1/competitions/435', {
                    headers: {
                        "X-Auth-Token": API
                    }
                });
            },
            getMatchDay: function(day) {
                return $http.get(' http://api.football-data.org/v1/competitions/435/fixtures', {
                    params: {
                      matchday: day
                    },
                    headers: {
                        "X-Auth-Token": API
                    }
                });
            }
        };
    });
