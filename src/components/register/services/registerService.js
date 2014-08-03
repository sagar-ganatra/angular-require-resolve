app.components.service('registerService', [
    function () {
        this.registerUser = function (username, password, email) {
            console.log(username);
            console.log(password);
            console.log(email);
        }
    }
]);