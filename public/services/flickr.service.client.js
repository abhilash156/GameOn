(function () {
    angular.module("WebAppMaker").factory("flickrService", flickrService);

    function flickrService($http) {
        var key = "ce1634722d033536838c4f745bcc2807";
        var secret = "cb2a3b33cec96afc";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

        var api = {
            "searchPhotos": searchPhotos
        };

        return api;

        function searchPhotos(searchTerm) {
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            return $http.get(url);
        }


        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();