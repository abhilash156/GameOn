var app = require("../../express");

var userModel = require("../model/user/user.model.server");

app.post("/api/user", createUser);
app.get("/api/user", findUserByCredentials);
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);


function createUser(request, response) {
    var user = request.body;

    userModel.createUser(user)
        .then(function (newUser) {
            response.send(newUser);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findUserByUsername(request, response) {
    var username = request.query.username;

    userModel.findUserByUsername(username)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findUserByCredentials(request, response) {
    var username = request.query.username;
    var password = request.query.password;
    if (username && password) {
        userModel.findUserByCredentials(username, password)
            .then(function (user) {
                response.send(user);
            }, function (error) {
                response.sendStatus(404).error(error);
            });
    } else if (username) {
        userModel.findUserByUsername(username)
            .then(function (user) {
                response.send(user);
            }, function (error) {
                response.sendStatus(404).error(error);
            });
    } else {
        response.sendStatus(400);
    }
}

function findUserById(request, response) {
    var userId = request.params.userId;
    userModel.findUserById(userId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function updateUser(request, response) {
    var user = request.body;
    var userId = request.params.userId;

    userModel.updateUser(userId, user)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deleteUser(request, response) {
    var userId = request.params.userId;

    userModel.deleteUser(userId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}
