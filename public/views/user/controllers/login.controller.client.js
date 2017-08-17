(function () {
    angular
        .module("GameOn")
        .controller("loginController", loginController);

    function loginController($location, userService, sessionUser) {
        var model = this;
        model.login = login;

        function init() {
            if(sessionUser) {
                $location.url("profile");
            }
        }

        init();

        function login(user) {
            userService.findUserByCredentials(user.username, user.password)
                .then(function (loginUser) {
                    if (loginUser === '') {
                        model.errorMessage = "Invalid Username or Password";
                    } else if (loginUser === 401) {
                        model.errorMessage = "Invalid Username or Password";
                    }
                    else {
                        $location.url("profile");
                    }
                });
        }
    }
})();