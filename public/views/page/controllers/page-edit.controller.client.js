(function () {
    angular
        .module("GameOn")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location, sessionUser) {
        var model = this;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        model.userId = sessionUser._id;
        model.gameId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            pageService.findPageByGameId(model.gameId)
                .then(function (pages) {
                    model.pages = pages;
                });
            pageService.findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                });
        }

        init();

        function updatePage(page) {
            pageService.updatePage(model.pageId, page)
                .then(function () {
                    $location.url("user/" + model.userId + "/game/" + model.gameId + "/page");
                });
        }

        function deletePage() {
            pageService.deletePage(model.pageId)
                .then(function () {
                    $location.url("user/" + model.userId + "/game/" + model.gameId + "/page");
                });
        }
    }
})();
