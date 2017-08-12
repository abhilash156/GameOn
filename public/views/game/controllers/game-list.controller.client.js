(function () {
    angular
        .module("WebAppMaker")
        .controller("gameListController", gameListController);

    function gameListController($routeParams, gameService) {
        var model = this;

        model.userId = $routeParams["uid"];

        function init() {
            gameService.findGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });
        }

        init();
    }
})();