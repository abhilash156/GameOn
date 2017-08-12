(function () {
    angular
        .module("WebAppMaker")
        .controller("newPageController", newPageController);

    function newPageController($routeParams, pageService, $location) {
        var model = this;
        model.createPage = createPage;
        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];

        function init() {
            pageService.findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();

        function createPage(page) {
            pageService.createPage(model.websiteId, page)
                .then(function () {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });
        }
    }
})();
