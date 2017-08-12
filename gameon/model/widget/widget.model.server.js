var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
mongoose.Promise = require("q").Promise;

var widgetModel = mongoose.model("WidgetModel", widgetSchema);
var pageModel = require("../page/page.model.server");

require("../models.server");

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    return widgetModel.create(widget)
        .then(function (newWidget) {
            pageModel.addWidget(pageId, newWidget._id);
            return newWidget;
        });
}

function findAllWidgetsForPage(pageId) {

    return widgetModel.find({"_page": pageId});
}

function findWidgetById(widgetId) {

    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {

    delete widget._page;
    delete widget.dateCreated;
    return widgetModel.update({_id: widgetId}, {$set: widget});
}

function deleteWidget(widgetId) {
    return pageModel.findById(widgetId)
        .then(function (widget) {
            return widgetModel.remove({_id: widgetId})
                .then(function () {
                    return pageModel.removeWidget(widget._page, widgetId);
                });
        });
}


function reorderWidget(pageId, start, end) {
    return pageModel.findPageById(pageId)
        .then(function (page) {
            widgets = page.widgets;
            widgets.splice(end, 0, widgets.splice(start, 1)[0]);
            page.widgets = widgets;
            return page.save();
        })
}
