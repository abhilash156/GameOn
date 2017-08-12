var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
mongoose.Promise = require("q").Promise;

var pageModel = mongoose.model("PageModel", pageSchema);
var gameModel = require("../game/game.model.server");

require("../models.server");

pageModel.createPage = createPage;
pageModel.findAllPagesForGame = findAllPagesForGame;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.addWidget = addWidget;
pageModel.removeWidget = removeWidget;

module.exports = pageModel;

function addWidget(pageId, widgetId) {
    return pageModel.findById(pageId)
        .then(function (page) {
            page.widgets.push(widgetId);
            return page.save();
        })
}

function removeWidget(pageId, widgetId) {
    return gameModel.findById(pageId)
        .then(function (page) {
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        })
}

function createPage(gameId, page) {
    page._game = gameId;
    return pageModel.create(page)
        .then(function (newPage) {
        return gameModel.addPage(gameId, newPage._id);
    });
}

function findAllPagesForGame(gameId) {
    return pageModel.find({"_game": gameId});
}

function findPageById(pageId) {

    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {

    delete page._game;
    delete page.dateCreated;
    return pageModel.update({_id: pageId}, {$set: page});
}

function deletePage(pageId) {
    return pageModel.findById(pageId)
        .then(function (page) {
            return pageModel.remove({_id: pageId})
                .then(function () {
                    return gameModel.removePage(page._game, pageId);
                });
        });
}