(function () {
    angular
        .module("GameOn")
        .controller("gameLikedController", gameListController);

    function gameListController(gameService, sessionUser) {
        var model = this;

        model.userId = sessionUser._id;

        function init() {
            gameService.findLikedGamesByUser(model.userId)
                .then(function (games) {
                    model.games = games;
                });
        }

        init();
    }
})();