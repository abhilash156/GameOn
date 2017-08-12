(function () {
    angular.module("GameOn")
        .config(configurations);

    function configurations($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../views/detail.client.html",
                controller: "detailController",
                controllerAs: "model"
            })
            .when("/home", {
                templateUrl: "../views/detail.client.html",
                controller: "detailController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "../views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
    }
})();