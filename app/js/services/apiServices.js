angular.module('app')
    .service('ApiServices', function($http) {
        return {
            getAll: function() {
                return $http.get('http://api.football-data.org/v1/competitions/434/teams',
 {headers: { 'X-Auth-Token': 'faea8f402c814bbeb0fca2a32e0e3e36'}});
            }
        };
    });
