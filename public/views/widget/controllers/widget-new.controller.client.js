(function () {
    angular
        .module("WebAppMaker")
        .controller("newWidgetController", newWidgetController);

    function newWidgetController($routeParams, widgetService, $location) {
        var model = this;
        model.createWidget = createWidget;
        model.userId = $routeParams["uid"];
        model.gameId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];

        function init() {
        }

        init();

        function createWidget(widgetType) {
            var widget = {
                "widgetType": widgetType
            };

            widgetService.createWidget(model.pageId, widget)
                .then(function (newWidget) {
                    $location.url("/user/" + model.userId + "/game/" + model.gameId + "/page/" + model.pageId
                        + "/widget/" + newWidget._id);
                });
        }
    }
})();
