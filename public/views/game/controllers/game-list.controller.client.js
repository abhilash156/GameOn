(function () {
    angular
        .module("GameOn")
        .controller("gameListController", gameListController);

    function gameListController(gameService, sessionUser) {
        var model = this;

        model.userId = sessionUser._id;

        function init() {
            gameService.findGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });
        }

        init();
    }
})();