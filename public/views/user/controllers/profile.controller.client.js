(function () {
    angular
        .module("GameOn")
        .controller("profileController", profileController);

    function profileController(userService, $location, sessionUser) {
        var model = this;

        model.userId = sessionUser._id;
        model.user = sessionUser;
        model.contentType = 'PROFILE';
        model.followed = true;
        model.games = null;
        model.ownedGames = null;
        model.likedGames = null;

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.isActive = isActive;
        model.setContentType = setContentType;
        model.logout = logout;

        function init() {
        }

        init();

        function loadUserGames() {
            userService.getOwnedGamesByUser(model.userId)
                .then(function (games) {
                    model.ownedGames = games;
                    model.viewGames = model.ownedGames;
                });
        }

        function loadLikedGames() {
            userService.getLikedGamesByUser(model.userId)
                .then(function (games) {
                    model.likedGames = games;
                    model.viewGames = model.likedGames;
                });
        }

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
            switch (contentType) {
                case 'PROFILE':
                    break;
                case 'GAMES':
                    if (model.ownedGames === null) {
                        loadUserGames();
                    } else {
                        model.viewGames = model.ownedGames;
                    }
                    break;
                case 'LIKED':
                    if (model.likedGames === null) {
                        loadLikedGames();
                    } else {
                        model.viewGames = model.likedGames;
                    }
                    break;
            }
        }

        function isActive(contentType) {
            return model.contentType === contentType;
        }
    }
})();