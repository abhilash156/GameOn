(function () {
    angular.module("WebAppMaker").factory("widgetService", widgetService);

    function widgetService($http) {
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "reOrderWidgets" : reOrderWidgets
        };
        return api;


        function createWidget(pageId, widget) {
            var url = "/api/page/" + pageId + "/widget";

            return $http.post(url, widget).then(successCallback, errorCallback);
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/" + pageId + "/widget";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/" + widgetId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/" + widgetId;

            return $http.put(url, widget).then(successCallback, errorCallback);
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/" + widgetId;

            return $http.delete(url).then(successCallback, errorCallback);
        }

        function reOrderWidgets(startIndex, endIndex, pageId) {
            var url = "/api/page/" + pageId + "/widget?initial=" + startIndex + "&final=" + endIndex;

            return $http.put(url).then(successCallback, errorCallback);
        }

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();