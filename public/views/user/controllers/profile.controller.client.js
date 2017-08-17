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

        model.viewUsers = [{
            "username": "ezio",
            "firstName": "Ezio",
            "lastName": "Auditore",
            "cover": "https://static.comicvine.com/uploads/original/11124/111240517/5025970-7320097309-latest",
            "_id": "123"
        }, {
            "_id": "456",
            "username": "knowsnothing",
            "firstName": "Jon",
            "lastName": "Snow",
            "cover": "http://i.dailymail.co.uk/i/pix/2016/06/15/02/26FC2E3000000578-3641721-Snow_s_doppelganger_goes_by_the_name_of_facialfollicles_on_Insta-a-16_1465952970225.jpg"
        }, {
            "_id": "789",
            "username": "bendtheknee",
            "firstName": "Daenerys",
            "lastName": "Targaryen",
            "cover": "http://www.fandomisinthedetails.com/uploads/1/9/2/0/19201953/8161305_orig.jpg"
        }];

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

        function searchPhotos(searchTerm) {
            flickrService
                .searchPhotos(searchTerm)
                .then(function (response) {
                    var data = response.data.replace("jsonFlickrApi(", "");
                    data = data.substring(0, data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
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