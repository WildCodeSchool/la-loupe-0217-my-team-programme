
var API = 'df36d6362f7842128c30322f9605de88';
var myApp = angular.module('app')
    .service('calendarService', function($http) {
        return {
            getCalendar: function(team) {
                return $http.get('http://api.football-data.org/v1/teams/'+ team +'/fixtures?timeFrame=n60', {
                    headers: {
                        "X-Auth-Token": API
                    }
                });
            }
        };
    });
