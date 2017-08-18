var mongoose = require("mongoose");
var gameSchema = require("./game.schema.server");
mongoose.Promise = require("q").Promise;

var gameModel = mongoose.model("GameModel", gameSchema);

require("../models.server");

gameModel.createGame = createGame;
gameModel.findGameByExternalId = findGameByExternalId;
gameModel.findGameById = findGameById;
gameModel.updateGame = updateGame;
gameModel.deleteGame = deleteGame;
gameModel.addPage = addPage;
gameModel.removePage = removePage;
gameModel.addLike = addLike;
gameModel.removeLike = removeLike;

module.exports = gameModel;

function addPage(gameId, pageId) {
    return gameModel.findById(gameId)
        .then(function (game) {
            game.pages.push(pageId);
            return game.save();
        })
}

function removePage(gameId, pageId) {
    return gameModel.findById(gameId)
        .then(function (game) {
            var index = game.pages.indexOf(pageId);
            game.pages.splice(index, 1);
            return game.save();
        })
}

function addLike(gameId, userId) {
    return gameModel.findById(gameId)
        .then(function (game) {
            game.likes.push(userId);
            return game.save();
        })
}

function removeLike(gameId, userId) {
    return gameModel.findById(gameId)
        .then(function (game) {
            var index = game.pages.indexOf(userId);
            game.likes.splice(index, 1);
            return game.save();
        })
}

function createGame(game) {

    return gameModel.create(game);
}

function findGameById(gameId) {

    return gameModel.findById(gameId);
}

function findGameByExternalId(externalId) {

    return gameModel.findOne({"externalId": externalId});
}

function updateGame(gameId, game) {

    delete game.dateCreated;
    return gameModel.update({_id: gameId}, {$set: game});
}

function deleteGame(gameId) {
   return gameModel.remove({_id: gameId});
}