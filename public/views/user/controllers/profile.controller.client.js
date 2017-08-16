(function () {
    angular
        .module("GameOn")
        .controller("profileController", profileController);

    function profileController(userService, $location, sessionUser) {
        var model = this;

        model.userId = sessionUser._id;
        model.contentType = 'PROFILE';

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.setContentType = setContentType;
        model.logout = logout;

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
                    $location.url("profile");
                });
        }

        function deleteUser(userId) {
            userService.deleteUser(userId)
                .then(function () {
                    $location.url("login/");
                });
        }

        function logout() {
            userService.logout()
                .then(function () {
                    $location.url("login/");
                })
        }

        function setContentType(contentType) {
            model.contentType = contentType;
        }
    }
})();