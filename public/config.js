(function () {
    angular.module("WebAppMaker").config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "./views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/default", {
                templateUrl: "./views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "./views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "./views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/user/:uid/game", {
                templateUrl: "views/game/templates/game-list.view.client.html",
                controller: "gameListController",
                controllerAs: "model"
            })
            .when("/user/:uid/liked", {
                templateUrl: "views/game/templates/game-liked.view.client.html",
                controller: "gameLikedController",
                controllerAs: "model"
            })
            .when("/user/:uid/followed", {
                templateUrl: "views/game/templates/user-followed.view.client.html",
                controller: "userFollowedController",
                controllerAs: "model"
            })
            .when("/user/:uid/followers", {
                templateUrl: "views/game/templates/user-followers.view.client.html",
                controller: "userFollowersController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/new", {
                templateUrl: "views/game/templates/game-new.view.client.html",
                controller: "newGameController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid", {
                templateUrl: "views/game/templates/game-edit.view.client.html",
                controller: "editGameController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "pageListController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "newPageController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/:pid", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "editPageController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/:pid/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/:pid/widget/new", {
                templateUrl: "views/widget/templates/widget-chooser.view.client.html",
                controller: "newWidgetController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/:pid/widget/:wgid", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "editWidgetController",
                controllerAs: "model"
            })
            .when("/user/:uid/game/:wid/page/:pid/widget/:wgid/search", {
                templateUrl: "views/widget/templates/widget-flickr-search.view.client.html",
                controller: "flickrImageSearchController",
                controllerAs: "model"
            })
    }
})();
