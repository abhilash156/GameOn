var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
mongoose.Promise = require("q").Promise;

var userModel = mongoose.model("UserModel", userSchema);

require("../models.server");

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.addGame = addGame;
userModel.addLike = addLike;
userModel.removeGame = removeGame;
userModel.removeLike = removeLike;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function addGame(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            user.games.push(gameId);
            return user.save();
        })
}

function addLike(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            user.liked.push(gameId);
            return user.save();
        })
}

function removeGame(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            var index = user.games.indexOf(gameId);
            user.games.splice(index, 1);
            return user.save();
        })
}

function removeLike(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            var index = user.liked.indexOf(gameId);
            user.liked.splice(index, 1);
            return user.save();
        })
}

function findUserById(userId) {

    return userModel.findById(userId);
}

function findUserByUsername(username) {

    return userModel.findOne({"username": username});
}

function findUserByCredentials(username, password) {

    return userModel.findOne({"username": username, "password": password});
}

function updateUser(userId, user) {

    delete user.username;
    delete user.dateCreated;
    return userModel.update({_id: userId}, {$set: user});
}

function deleteUser(userId) {

    return userModel.remove({_id: userId});
}