(function () {
    angular
        .module("GameOn")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, $location) {
        var model = this;

        model.userId = $routeParams["uid"];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            userService.findUserById(model.userId)
                .then(function (user) {
                    model.user = user;
                });
        }

        init();

        function updateUser(user) {
            userService.updateUser(model.userId, user)
                .then(function () {
                    $location.url("user/" + model.userId);
                });
        }

        function deleteUser(userId) {
            userService.deleteUser(userId)
                .then(function () {
                    $location.url("login/");
                });
        }
    }
})();