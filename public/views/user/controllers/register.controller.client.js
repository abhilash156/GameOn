(function () {
    angular
        .module("GameOn")
        .controller("registerController", registerController);

    function registerController(userService, $location, sessionUser) {
        var model = this;

        model.registerUser = registerUser;

        function init() {
            if (sessionUser) {
                $location.url("profile");
            }
        }

        init();

        function registerUser(user, password) {
            if (password === user.password) {
                userService.findUserByUsername(user.username)
                    .then(function (existUser) {
                        if (!existUser) {
                            userService.createUser(user)
                                .then(function (user) {
                                    userService.login(user.username, password).then(
                                        function () {
                                            $location.url("profile");
                                        }
                                    );

                                });
                        } else {
                            model.errorMessage = "User already exists";
                        }
                    });

            } else {
                model.errorMessage = "Password don't match";
            }
        }
    }
})();