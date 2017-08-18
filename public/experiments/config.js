(function () {
    angular.module("GameOn")
        .config(configurations);

    function configurations($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./detail.client.html",
                controller: "detailController",
                controllerAs: "model"
            })
            .when("/home", {
                templateUrl: "./detail.client.html",
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