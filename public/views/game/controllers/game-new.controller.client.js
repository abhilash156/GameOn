(function () {
    angular
        .module("GameOn")
        .controller("newGameController", newGameController);

    function newGameController(gameService, $location, sessionUser) {
        var model = this;
        model.createGame = createGame;
        model.userId = sessionUser._id;

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
                    $location.url("game");
                });
        }
    }
})();
