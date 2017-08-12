(function () {
    angular
        .module("WebAppMaker")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location) {
        var model = this;
        model.updatePage = updatePage;
        model.deletePage = deletePage;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
            pageService.findPageByWebsiteId(model.websiteId)
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
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });
        }

        function deletePage() {
            pageService.deletePage(model.pageId)
                .then(function () {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });
        }
    }
})();
