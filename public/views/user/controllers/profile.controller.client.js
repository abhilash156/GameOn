(function () {
    angular
        .module("GameOn")
        .controller("profileController", profileController);

    function profileController(userService, $location, sessionUser, $routeParams) {
        var model = this;

        model.username = $routeParams['username'];
        model.loggedUser = sessionUser;
        model.contentType = 'GAMES';
        model.followed = false;
        model.viewGames = null;
        model.ownedGames = null;
        model.likedGames = null;
        model.followers = null;
        model.following = null;
        model.isLoggedUser = false;

        model.viewUsers = null;

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        model.isActive = isActive;
        model.setContentType = setContentType;
        model.logout = logout;
        model.followUser = followUser;
        model.unFollowUser = unFollowUser;

        function init() {
            if ((!model.username) || (model.username === sessionUser.username)) {
                model.userId = sessionUser._id;
                model.user = sessionUser;
                model.isLoggedUser = true;
            } else {
                userService.findUserByUsername(model.username)
                    .then(function (user) {
                        model.isLoggedUser = false;
                        model.userId = user._id;
                        model.user = user;
                        if (!model.user.cover) {
                            model.user.cover = "http://www.imran.com/xyper_images/icon-user-default.png";
                        }
                        userService.isFollowing(model.loggedUser._id, model.user._id)
                            .then(function (value) {
                                model.followed = value;
                            });
                    });
            }
            loadUserGames();
            model.viewGames = model.ownedGames;
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

        function loadFollowers() {
            userService.getFollowers(model.userId)
                .then(function (users) {
                    model.followers = users;
                    for (var i = 0; i < model.followers.length; i++) {
                        model.followers[i].isLoggedUserFollowing = false;
                        for (var j = 0; j < model.user.following.length; j++) {
                            if (model.followers[i]._id === model.user.following[j]) {
                                model.followers[i].isLoggedUserFollowing = true;
                                break;
                            }
                        }
                    }
                });
        }

        function loadFollowing() {
            userService.getFollowing(model.userId)
                .then(function (users) {
                    model.following = users;
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
                case 'FOLLOWERS':
                    if (model.followers === null) {
                        loadFollowers();
                    }
                    break;
                case 'FOLLOWING':
                    if (model.following === null) {
                        loadFollowing();
                    }
                    break;
            }
        }

        function isActive(contentType) {
            return model.contentType === contentType;
        }

        function followUser(followId) {
            userService.followUser(model.loggedUser._id, followId)
                .then(function () {
                    model.followed = true;
                });
        }

        function unFollowUser(followId) {
            userService.unFollowUser(model.loggedUser._id, followId)
                .then(function () {
                    model.followed = false;
                });
        }

        function isFollowing() {
            userService.isFollowing(model.loggedUser._id, model.user._id)
                .then(function (value) {
                    model.followed = value;
                });
        }
    }
})();