(function () {
    angular
        .module("GameOn")
        .controller("editGameController", editGameController);

    function editGameController($routeParams, gameService, $location) {
        var model = this;
        model.updateGame = updateGame;
        model.deleteGame = deleteGame;
        model.userId = $routeParams["uid"];
        model.gameId = $routeParams["wid"];

        function init() {
            gameService.findGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });

            gameService.findGameById(model.gameId)
                .then(function (game) {
                    model.game = game;
                });
        }

        init();

        function updateGame(game) {
            gameService.updateGame(model.gameId, game)
                .then(function () {
                    $location.url("user/" + model.userId + "/game");
                });
        }

        function deleteGame() {
            gameService.deleteGame(model.gameId)
                .then(function () {
                    $location.url("user/" + model.userId + "/game");
                });
        }
    }
})();
