angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth, ApiServices) {
        $scope.register = function() {
          $scope.user.teams = newArray;
            Auth.register($scope.user).then(function() {
                $state.go('anon.home');
            });
        };
    // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// Make the teams appear in the modal
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
