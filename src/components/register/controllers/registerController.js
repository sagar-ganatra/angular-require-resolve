
app.components.controller('registerController', [
    '$scope',
    'registerService',
    function ($scope, registerService) {
        console.log('In register controller');

        $scope.submitForm = function () {
            registerService.registerUser($scope.userName, $scope.userPassword, $scope.email);
        }
    }
]);
