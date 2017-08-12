var app = require("../../express");

var multer = require('multer');
var upload = multer({dest: __dirname + '/../../public/assignment/uploads'});

var widgetModel = require("../model/widget/widget.model.server");
var pageModel = require("../model/page/page.model.server");

app.post("/api/page/:pageId/widget", createWidget);
app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
app.put("/api/page/:pageId/widget", reOrderWidgets);
app.get("/api/widget/:widgetId", findWidgetById);
app.put("/api/widget/:widgetId", updateWidget);
app.delete("/api/widget/:widgetId", deleteWidget);
app.post("/api/upload", upload.single('myFile'), uploadImage);

function createWidget(request, response) {
    var pageId = request.params.pageId;
    var widget = request.body;

    widgetModel.createWidget(pageId, widget)
        .then(function (newWidget) {
            response.send(newWidget);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findAllWidgetsForPage(request, response) {
    var pageId = request.params.pageId;
    pageModel.findPageById(pageId).populate("widgets")
        .exec()
        .then(function (page) {
            response.json(page.widgets);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}


function findWidgetById(request, response) {
    var widgetId = request.params.widgetId;
    widgetModel.findWidgetById(widgetId)
        .then(function (widget) {
            response.json(widget);
        }, function () {
            response.sendStatus(404);
        });
}

function updateWidget(request, response) {
    var widget = request.body;
    var widgetId = request.params.widgetId;

    widgetModel.updateWidget(widgetId, widget)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deleteWidget(request, response) {
    var widgetId = request.params.widgetId;

    widgetModel.deleteWidget(widgetId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}


function reOrderWidgets(request, response) {
    var initial = request.query.initial;
    var final = request.query.final;
    var pageId = request.params.pageId;

    widgetModel.reorderWidget(pageId, initial, final)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function uploadImage(request, response) {
    var widgetId = request.body.widgetId;
    var width = request.body.width;
    var myFile = request.file;

    var userId = request.body.userId;
    var websiteId = request.body.websiteId;
    var pageId = request.body.pageId;

    var filename = myFile.filename;

    widgetModel.findWidgetById(widgetId)
        .then(function (widget) {
            widget.url = '/assignment/uploads/' + filename;
            widget.width = width;
            var callbackUrl = "/assignment/#!/user/" + userId + "/website/" + websiteId + "/page/" + pageId
                + "/widget/" + widgetId;
            response.redirect(callbackUrl);
        });
}
