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
                templateUrl: "./views/search/templates/home.view.client.html",
                controller: "homeController",
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
            .when("/game/:gameId/manage", {
                templateUrl: "views/game/templates/game-manage.view.client.html",
                controller: "gameManageController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLoginStrict
                }
            })
            .when("/game/:gameId/detail", {
                templateUrl: "views/game/templates/game-detail.view.client.html",
                controller: "gameDetailController",
                controllerAs: "model",
                resolve: {
                    sessionUser: checkLogin
                }
            })
            .when("/admin/create", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
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
                    deferred.resolve(setUserType(user));
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
                    deferred.resolve(setUserType(user));
                }
            });
        return deferred.promise;
    }


    function setUserType(user) {
        if (user.userType === 'ADMIN') {
            user.isAdmin = true;
        } else if (user.userType === 'SELLER') {
            user.isSeller = true;
        } else {
            user.isPlayer = true;
        }
        return user;
    }
})();
