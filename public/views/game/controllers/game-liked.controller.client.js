(function () {
    angular
        .module("GameOn")
        .controller("gameLikedController", gameListController);

    function gameListController($routeParams, gameService) {
        var model = this;

        model.userId = $routeParams["uid"];

        function init() {
            gameService.findLikedGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });
        }

        init();
    }
})();