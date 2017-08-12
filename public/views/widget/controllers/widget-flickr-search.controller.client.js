(function () {
    angular
        .module("WebAppMaker")
        .controller("flickrImageSearchController", flickrImageSearchController);

    function flickrImageSearchController(flickrService, $routeParams, widgetService, $location) {
        var model = this;
        model.searchPhotos = searchPhotos;
        model.selectPhoto = selectPhoto;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];
        model.widgetId = $routeParams["wgid"];

        function searchPhotos(searchTerm) {
            flickrService
                .searchPhotos(searchTerm)
                .then(function (response) {
                    var data = response.data.replace("jsonFlickrApi(", "");
                    data = data.substring(0, data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });
        }


        function selectPhoto(photo) {
            var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
            url += "/" + photo.id + "_" + photo.secret + "_b.jpg";

            var widget = widgetService.findWidgetById(model.widgetId);
            //websiteId, pageId, widgetId, {url: url}
            widget.url = url;
            widgetService.updateWidget(model.widgetId, widget)
                .then(function () {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId
                        + "/widget/" + model.widgetId);
                })

        }

    }
})();