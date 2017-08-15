(function () {
    angular
        .module("GameOn")
        .controller("gameLikedController", gameLikedController);

    function gameLikedController(gameService, sessionUser) {
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