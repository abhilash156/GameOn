(function () {
    angular
        .module("GameOn")
        .controller("newPageController", newPageController);

    function newPageController($routeParams, pageService, $location, sessionUser) {
        var model = this;
        model.createPage = createPage;
        model.userId = sessionUser._id;
        model.gameId = $routeParams["wid"];

        function init() {
            pageService.findPageByGameId(model.gameId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();

        function createPage(page) {
            pageService.createPage(model.gameId, page)
                .then(function () {
                    $location.url("user/" + model.userId + "/game/" + model.gameId + "/page");
                });
        }
    }
})();
