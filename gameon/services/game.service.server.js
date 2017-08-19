var app = require("../../express");

var gameModel = require("../model/game/game.model.server");

app.post("/api/game", createGame);
app.get("/api/game/:gameId", findGameById);
app.get("/api/game", findGameByExternalId);
app.put("/api/game/:gameId", updateGame);
app.delete("/api/game/:gameId", deleteGame);

function createGame(request, response) {
    var game = request.body;

    gameModel.createGame(game)
        .then(function (newGame) {
            response.send(newGame);
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

function findGameByExternalId(request, response) {
    var externalId = request.query.externalId;

    gameModel.findGameByExternalId(externalId)
        .then(function (game) {
            if (game === null) {
                response.sendStatus(204);
            } else {
                response.json(game);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}