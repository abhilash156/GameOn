var app = require("../../express");

var userModel = require("../model/user/user.model.server");

app.post("/api/user", createUser);
app.get("/api/user", findUserByCredentials);
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);
app.get("/api/user/:userId/game", findGamesByUser);

app.get("/api/user/:userId/liked", findLikedGamesByUser);
app.get("/api/user/:userId/liked/:gameId", isLiked);
app.get("/api/user/:userId/following", getFollowing);
app.get("/api/user/:userId/following/:userId2", isFollowing);
app.get("/api/user/:userId/followers", getFollowers);
app.get("/api/user/:userId/followers/:userId2", isFollower);

app.get("/api/user/:userId/like/:gameId", likeGame);
app.get("/api/user/:userId/unlike/:gameId", unLikeGame);

function createUser(request, response) {
    var user = request.body;

    userModel.createUser(user)
        .then(function (newUser) {
            response.send(newUser);
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

function findGamesByUser(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("games")
        .exec()
        .then(function (user) {
            response.json(user.games);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findLikedGamesByUser(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("liked")
        .exec()
        .then(function (user) {
            response.json(user.liked);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function getFollowing(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("following")
        .exec()
        .then(function (user) {
            response.json(user.following);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isFollowing(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.following.indexOf(userId2) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isFollower(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.followers.indexOf(userId2) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isLiked(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.liked.indexOf(gameId) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function likeGame(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.addLike(userId, gameId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function unLikeGame(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.removeLike(userId, gameId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function getFollowers(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("followers")
        .exec()
        .then(function (user) {
            response.json(user.followers);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}
