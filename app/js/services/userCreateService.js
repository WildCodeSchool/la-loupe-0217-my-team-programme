angular.module('app')
    .service('userCreateService', function($http) {
        return {
            create: function (user) {
                return $http.post('/user', user);
            },
            getAll: function () {
                return $http.get('/user');
            }
        };
    });
