angular.module('app')
    .service('ApiServices', function($http) {
        var API = 'df36d6362f7842128c30322f9605de88';
        return {
            getAll: function() {
                return $http.get('http://api.football-data.org/v1/competitions/434/teams', {
                    headers: {
                        'X-Auth-Token': 'faea8f402c814bbeb0fca2a32e0e3e36',
                        'X-Response-Control': 'minified'
                    }
                });
            },
            getOne: function (id) {
              return $http.get('http://api.football-data.org/v1/teams/' + id, {
                headers: {
                    'X-Auth-Token': 'faea8f402c814bbeb0fca2a32e0e3e36'
                }
              });
            },
            getCalendar: function(team) {
                return $http.get('http://api.football-data.org/v1/teams/'+ team +'/fixtures?timeFrame=n30', {
                    headers: {
                        "X-Auth-Token": API,
                        "X-Response-Control": "minified"
                    }
                });
            }
        };

    });
