angular.module('app')
    .controller('RegisterController', function($scope, $state, Auth) {
        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('anon.home');
            });
        };
        $scope.afficher = function() {
            ApiServices.getAll().then(function(res) {
                $scope.infoTeams = res.data;
              });
          };
          $scope.afficher();

    $scope.myFunc = function(evt, logo2) {
                console.log("logo2");
                $scope.currentId = teams;

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
    });
