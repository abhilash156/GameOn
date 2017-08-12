(function () {
    angular
        .module("WebAppMaker")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($routeParams, widgetService, $location) {
        var model = this;

        model.getWidgetUrlForType = getWidgetUrlForType;
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        model.userId = $routeParams["uid"];
        model.websiteId = $routeParams["wid"];
        model.pageId = $routeParams["pid"];
        model.widgetId = $routeParams["wgid"];

        function init() {
            widgetService.findWidgetById(model.widgetId)
                .then(function (widget) {
                    model.widget = widget;
                });
        }

        init();

        function getWidgetUrlForType(type) {
            return 'views/widget/templates/widget-' + type.toLowerCase() + '-edit.view.client.html';
        }

        function updateWidget(widget) {
            widgetService.updateWidget(model.widgetId, widget)
                .then(function () {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
                });
        }

        function deleteWidget() {
            widgetService.deleteWidget(model.widgetId)
                .then(function () {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/" + model.pageId + "/widget");
                });
        }
    }
})();