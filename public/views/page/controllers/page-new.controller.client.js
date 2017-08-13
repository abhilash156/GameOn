(function () {
    angular
        .module("GameOn")
        .controller("newPageController", newPageController);

    function newPageController($routeParams, pageService, $location) {
        var model = this;
        model.createPage = createPage;
        model.userId = $routeParams["uid"];
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
