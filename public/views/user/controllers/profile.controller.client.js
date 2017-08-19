(function () {
    angular
        .module("GameOn")
        .controller("profileController", profileController);

    function profileController(userService, $location, sessionUser, $routeParams) {
        var model = this;

        model.username = $routeParams['username'];
        model.loggedUser = sessionUser;
        model.contentType = 'PROFILE';
        model.followed = false;
        model.viewGames = null;
        model.viewUsers = null;
        model.ownedGames = null;
        model.likedGames = null;
        model.followers = null;
        model.following = null;
        model.inventory = null;
        model.isLoggedUser = false;

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
                        if (model.loggedUser.isAdmin) {
                            model.contentType = 'PROFILE';
                        } else {
                            model.contentType = 'GAMES';
                        }
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
                        loadUserGames();
                        model.viewGames = model.ownedGames;
                    });
            }
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
                    model.viewUsers = model.followers;
                });
        }

        function loadFollowing() {
            userService.getFollowing(model.userId)
                .then(function (users) {
                    model.following = users;
                    model.viewUsers = model.following;
                });
        }

        function loadInventory() {
            userService.getInventoryByUser(model.userId)
                .then(function (users) {
                    model.inventory = users;
                    model.viewGames = model.inventory;
                });
        }

        function updateUser(user) {
            userService.updateUser(model.userId, user)
                .then(function () {
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
                    } else {
                        model.viewUsers = model.followers;
                    }
                    break;
                case 'FOLLOWING':
                    if (model.following === null) {
                        loadFollowing();
                    } else {
                        model.viewUsers = model.following;
                    }
                    break;
                case 'USERS':
                    loadAllUsers();
                    break;
                case 'INVENTORY':
                    if (model.inventory === null) {
                        loadInventory();
                    } else {
                        model.viewGames = model.inventory;
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

        function loadAllUsers() {
            userService.getUsers()
                .then(function (users) {
                    model.viewUsers = users;
                });
        }
    }
})();