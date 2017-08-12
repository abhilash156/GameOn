(function () {
    angular
        .module("WebAppMaker")
        .controller("newWebsiteController", newWebsiteController);

    function newWebsiteController($routeParams, websiteService, $location) {
        var model = this;
        model.createWebsite = createWebsite;
        model.userId = $routeParams["uid"];

        function init() {
            websiteService.findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
        }

        init();

        function createWebsite(website) {
            websiteService.createWebsite(model.userId, website)
                .then(function () {
                    $location.url("user/" + model.userId + "/website");
                });
        }
    }
})();
