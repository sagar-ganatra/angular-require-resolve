
app.components.controller('loginController', [
    '$scope',
    'loginService',
    function ($scope, loginService) {

        console.log('In login controller');
        
        $scope.submitForm = function () {
            loginService.loginUser($scope.userName, $scope.userPassword);
        }
    }
]);
