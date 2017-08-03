(function () {
    angular.module("GameOn")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/detail.client.html",
                controller: "detailController",
                controllerAs: "model"
            })
            .when("/home", {
                templateUrl: "views/detail.client.html",
                controller: "detailController",
                controllerAs: "model"
            })
    }
})();