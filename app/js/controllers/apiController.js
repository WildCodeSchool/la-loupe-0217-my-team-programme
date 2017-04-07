angular.module('app')
    .controller('ApiController', function($scope, ApiServices) {
        $scope.afficher = function() {
            ApiServices.getAll().then(function(res) {
                $scope.infoTeams = res.data;

            });
        };
        $scope.afficher();


        var newArray = [];
        $scope.currentId = false;

        $scope.myFunc = function(index) {
            if (newArray.indexOf(index) != -1) {
                newArray.splice(newArray.indexOf(index), 1);
            } else {
                newArray.push(index);
            }
console.log(newArray);
        };

        $scope.isSelected = function(id) {
            return newArray.indexOf(id) == -1;
        };
    });
