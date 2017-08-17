(function () {
    angular
        .module("GameOn")
        .controller("searchController", searchController);

    function searchController($location, $routeParams, giantBombService, gameService) {
        var model = this;
        model.searchGames = searchGames;
        model.getGameURL = getGameURL;
        model.searchTerm = $routeParams["q"];


        function init() {
            searchGames();
        }

        init();

        function searchGames() {
            giantBombService.searchGames(model.searchTerm)
                .then(function (response) {
                    console.log(response);
                    model.searchResult = response.results;
                });
        }

        function getGameURL(externalId) {
            gameService.findGameByExternalId(externalId)
                .then(function (game) {
                    $location.url("/game/" + game._id + "/detail");
                });
        }
    }
})();