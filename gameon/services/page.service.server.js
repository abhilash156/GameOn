var app = require("../../express");

var pageModel = require("../model/page/page.model.server");

app.post("/api/game/:gameId/page", createPage);
app.get("/api/game/:gameId/page", findAllPagesForGame);
app.get("/api/page/:pageId", findPageById);
app.put("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

function createPage(request, response) {
    var gameId = request.params.gameId;
    var page = request.body;

    pageModel.createPage(gameId, page)
        .then(function (newPage) {
            response.send(newPage);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findAllPagesForGame(request, response) {
    var gameId = request.params.gameId;

    pageModel.findAllPagesForGame(gameId)
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