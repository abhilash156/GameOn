(function () {
    angular
        .module("GameOn")
        .controller("registerController", registerController);

    function registerController(userService, $location) {
        var model = this;

        model.registerUser = registerUser;

        function init() {

        }

        init();

        function registerUser(user, password) {
            if (password === user.password) {
                userService.findUserByUsername(user.username)
                    .then(function (existUser) {
                        if (!existUser) {
                            userService.createUser(user)
                                .then(function () {
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