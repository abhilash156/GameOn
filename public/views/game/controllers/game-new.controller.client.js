(function () {
    angular
        .module("GameOn")
        .controller("newGameController", newGameController);

    function newGameController($routeParams, gameService, $location) {
        var model = this;
        model.createGame = createGame;
        model.userId = $routeParams["uid"];

        function init() {
            gameService.findGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });
        }

        init();

        function createGame(game) {
            gameService.createGame(game)
                .then(function () {
                    $location.url("user/" + model.userId + "/game");
                });
        }
    }
})();
