(function () {
    angular
        .module("GameOn")
        .controller("searchController", searchController);

    function searchController($location, giantBombService) {
        var model = this;
        model.searchGames = searchGames;

        function init() {
        }

        init();

        function searchGames(searchTerm) {
            giantBombService
                .searchGames(searchTerm)
                .then(function (response) {
                    model.photos = data.photos;
                });
        }
    }
})();