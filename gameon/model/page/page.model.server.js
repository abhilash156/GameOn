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

module.exports = pageModel;

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