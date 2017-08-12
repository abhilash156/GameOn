(function () {
    angular.module("WebAppMaker").factory("websiteService", websiteService);

    function websiteService($http) {
        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };

        return api;

        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";

            return $http.post(url, website).then(successCallback, errorCallback);
        }

        function findWebsitesByUser(userId) {
            var url = "/api/user/" + userId + "/website";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;

            return $http.put(url, website).then(successCallback, errorCallback);
        }

        function deleteWebsite(websiteId) {
            var url = "/api/website/" + websiteId;

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