(function () {
    angular
        .module("GameOn")
        .controller("gameManageController", gameManageController);

    function gameManageController($routeParams, gameService, $location, sessionUser, userService) {
        var model = this;
        model.updateGame = updateGame;
        model.deleteGame = deleteGame;
        model.userId = sessionUser._id;
        model.gameId = $routeParams["gameId"];

        function init() {
            userService.getInventoryByUser(model.userId)
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
                    $location.url("/game");
                });
        }

        function deleteGame() {
            gameService.deleteGame(model.gameId)
                .then(function () {
                    $location.url("/game");
                });
        }
    }
})();
