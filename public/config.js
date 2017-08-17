(function () {
    angular.module("GameOn").config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/search/templates/home.view.client.html",
                controller: "homeController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/search", {
                templateUrl: "./views/search/templates/search.view.client.html",
                controller: "searchController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/login", {
                templateUrl: "./views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/default", {
                templateUrl: "./views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/register", {
                templateUrl: "./views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/profile", {
                templateUrl: "./views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/profile/:username", {
                templateUrl: "./views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/followed", {
                templateUrl: "views/game/templates/user-followed.view.client.html",
                controller: "userFollowedController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/followers", {
                templateUrl: "views/game/templates/user-followers.view.client.html",
                controller: "userFollowersController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/game/new", {
                templateUrl: "views/game/templates/game-new.view.client.html",
                controller: "newGameController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/game/:wid", {
                templateUrl: "views/game/templates/game-edit.view.client.html",
                controller: "editGameController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/game/:wid/detail", {
                templateUrl: "views/game/templates/game-detail.view.client.html",
                controller: "gameDetailController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            });
    }

    function checkLoginStrict(userService, $q, $location) {
        var deferred = $q.defer();
        userService.checkLogin()
            .then(function (user) {
                if (user === '0') {
                    deferred.reject();
                    $location.url("/login");
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

    function checkLogin(userService, $q) {
        var deferred = $q.defer();
        userService.checkLogin()
            .then(function (user) {
                if (user === '0') {
                    deferred.resolve(null);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

})();
