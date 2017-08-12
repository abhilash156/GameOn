(function () {
    angular
        .module("WebAppMaker")
        .controller("profileController", profileController);

    function profileController($routeParams, userService, $location) {
        var model = this;

        var userId = $routeParams["uid"];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            userService.findUserById(userId)
                .then(function (user) {
                    model.user = user;
                });
        }

        init();

        function updateUser(user) {
            userService.updateUser(userId, user)
                .then(function () {
                    $location.url("user/" + userId);
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