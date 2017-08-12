var app = require("../../express");

var pageModel = require("../model/page/page.model.server");

app.post("/api/website/:websiteId/page", createPage);
app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

function createPage(request, response) {
    var websiteId = request.params.websiteId;
    var page = request.body;

    pageModel.createPage(websiteId, page)
        .then(function (newPage) {
            response.send(newPage);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findAllPagesForWebsite(request, response) {
    var websiteId = request.params.websiteId;

    pageModel.findAllPagesForWebsite(websiteId)
        .then(function (pages) {
            response.send(pages);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findPageById(request, response) {
    var pageId = request.params.pageId;

    pageModel.findPageById(pageId)
        .then(function (page) {
            response.send(page);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function updatePage(request, response) {
    var page = request.body;
    var pageId = request.params.pageId;

    pageModel.updatePage(pageId, page)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deletePage(request, response) {
    var pageId = request.params.pageId;

    pageModel.deletePage(pageId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}