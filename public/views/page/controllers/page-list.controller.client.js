(function () {
    angular
        .module("WebAppMaker")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.gameId = $routeParams["wid"];

        function init() {
            pageService.findPageByGameId(model.gameId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();
    }
})();