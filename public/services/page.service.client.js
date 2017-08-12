(function () {
    angular.module("WebAppMaker").factory("pageService", pageService);

    function pageService($http) {
        var api = {
            "createPage": createPage,
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        function createPage(websiteId, page) {
            var url = "/api/website/" + websiteId + "/page";

            return $http.post(url, page).then(successCallback, errorCallback);
        }

        function findPageByWebsiteId(websiteId) {
            var url = "/api/website/" + websiteId + "/page";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findPageById(pageId) {
            var url = "/api/page/" + pageId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function updatePage(pageId, page) {
            var url = "/api/page/" + pageId;

            return $http.put(url, page).then(successCallback, errorCallback);
        }

        function deletePage(pageId) {
            var url = "/api/page/" + pageId;

            return $http.delete(url).then(successCallback, errorCallback);
        }

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();