(function () {
    angular
        .module("GameOn")
        .controller("registerController", registerController);

    function registerController(userService, $location, sessionUser) {
        var model = this;

        model.registerUser = registerUser;
        model.createUser = createUser;
        model.loggedUser = sessionUser;

        function init() {
            if (sessionUser && !sessionUser.isAdmin) {
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

        function createUser(user, password) {
            if (password === user.password) {
                userService.findUserByUsername(user.username)
                    .then(function (existUser) {
                        if (!existUser) {
                            userService.createUser(user)
                                .then(function (user) {
                                    $location.url("profile");
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