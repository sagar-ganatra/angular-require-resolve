app.components.service('loginService', [
    function () {
        this.loginUser = function (username, password) {
            console.log(username);
            console.log(password);
        }
    }
]);