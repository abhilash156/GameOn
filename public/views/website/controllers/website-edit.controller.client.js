(function () {
    angular
        .module("WebAppMaker")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($routeParams, websiteService, $location) {
        var model = this;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;
        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];

        function init() {
            websiteService.findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });

            websiteService.findWebsiteById(model.websiteId)
                .then(function (website) {
                    model.website = website;
                });
        }

        init();

        function updateWebsite(website) {
            websiteService.updateWebsite(model.websiteId, website)
                .then(function () {
                    $location.url("user/" + model.userId + "/website");
                });
        }

        function deleteWebsite() {
            websiteService.deleteWebsite(model.websiteId)
                .then(function () {
                    $location.url("user/" + model.userId + "/website");
                });
        }
    }
})();
