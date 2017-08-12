var app = require("../../express");

var gameModel = require("../model/game/game.model.server");

app.post("/api/user/:userId/game", createGame);
app.get("/api/user/:userId/game", findGamesByUser);
app.get("/api/game/:gameId", findGameById);
app.put("/api/game/:gameId", updateGame);
app.delete("/api/game/:gameId", deleteGame);

function createGame(request, response) {
    var userId = request.params.userId;
    var game = request.body;

    gameModel.createGameForUser(userId, game)
        .then(function (newGame) {
            response.send(newGame);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findGamesByUser(request, response) {
    var userId = request.params.userId;

    gameModel.findAllGamesForUser(userId)
        .then(function (games) {
            response.send(games);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findGameById(request, response) {
    var gameId = request.params.gameId;

    gameModel.findGameById(gameId)
        .then(function (game) {
            response.send(game);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function updateGame(request, response) {
    var game = request.body;
    var gameId = request.params.gameId;

    gameModel.updateGame(gameId, game)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deleteGame(request, response) {
    var gameId = request.params.gameId;

    gameModel.deleteGame(gameId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}