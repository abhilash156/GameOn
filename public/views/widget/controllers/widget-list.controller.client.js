(function () {
    angular
        .module("WebAppMaker")
        .controller("widgetListController", widgetListController);

    function widgetListController($routeParams, widgetService, $sce) {
        var model = this;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        model.trustThisContent = trustThisContent;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;

        function init() {
            widgetService.findWidgetsByPageId(model.pageId)
                .then(function (widgets) {
                    model.widgets = widgets;
                });
        }

        init();

        function trustThisContent(html) {
            return $sce.trustAsHtml(html);
        }

        function getYouTubeEmbedUrl(youtubeLink) {
            var youTubeLinkParts = youtubeLink.split('/');
            var id = youTubeLinkParts[youTubeLinkParts.length - 1];

            var embedUrl = "https://www.youtube.com/embed/" + id;
            return $sce.trustAsResourceUrl(embedUrl);
        }
    }
})();