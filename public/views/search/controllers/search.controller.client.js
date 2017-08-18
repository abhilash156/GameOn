(function () {
    angular
        .module("GameOn")
        .controller("searchController", searchController);

    function searchController($location, $routeParams, giantBombService, gameService, sessionUser, userService) {
        var model = this;
        model.searchGames = searchGames;
        model.getGameURL = getGameURL;
        model.searchTerm = $routeParams["q"];
        model.loggedUser = sessionUser;


        function init() {
            searchGames();
        }

        init();

        function searchGames() {
            giantBombService.searchGames(model.searchTerm)
                .then(function (response) {
                    model.searchResult = response.results;
                });
            userService.searchUsers(model.searchTerm)
                .then(function (users) {
                    model.searchResultUsers = users;
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