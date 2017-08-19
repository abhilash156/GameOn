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
userModel.addFollow = addFollow;
userModel.removeFollow = removeFollow;
userModel.getAllUsers = getAllUsers;
userModel.findUserByGoogleId = findUserByGoogleId;
userModel.findUserByFacebookId = findUserByFacebookId;
userModel.searchUsers = searchUsers;
userModel.removeInventory = removeInventory;
userModel.upsertInventory = upsertInventory;

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

function removeGame(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            var index = user.games.indexOf(gameId);
            user.games.splice(index, 1);
            return user.save();
        });
}

function removeInventory(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            var inventory = user.inventory;
            var index = -1;
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i]._game == gameId) {
                    index = i;
                    break;
                }
            }
            user.inventory.splice(index, 1);
            return user.save();
        });
}

function upsertInventory(userId, updatedInventory) {
    return userModel.findById(userId)
        .then(function (user) {
            var inventory = user.inventory;
            var index = -1;
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i]._game == updatedInventory._game) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                user.inventory.push(updatedInventory);
            } else {
                user.inventory[index] = updatedInventory;
            }
            return user.save();
        });
}

function addLike(userId, gameId) {
    return userModel.findById(userId)
        .then(function (user) {
            user.liked.push(gameId);
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

function addFollow(userId, userId2) {
    userModel.findById(userId2)
        .then(function (user) {
            user.followers.push(userId);
            user.save();
        });

    return userModel.findById(userId)
        .then(function (user) {
            user.following.push(userId2);
            return user.save();
        });
}

function removeFollow(userId, userId2) {
    userModel.findById(userId2)
        .then(function (user) {
            var index = user.followers.indexOf(userId);
            user.followers.splice(index, 1);
            user.save();
        });

    return userModel.findById(userId)
        .then(function (user) {
            var index = user.following.indexOf(userId2);
            user.following.splice(index, 1);
            return user.save();
        });
}

function findUserById(userId) {

    return userModel.findById(userId);
}

function findUserByGoogleId(googleId) {

    return userModel.findOne({'google.id': googleId});
}

function findUserByFacebookId(facebookId) {

    return userModel.findOne({'facebook.id': facebookId});
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

function getAllUsers() {

    return userModel.find();
}

function searchUsers(searchTerm) {
    searchTerm = new RegExp(["^", searchTerm, "$"].join(""), "i");
    var searchArray = [
        {"username": searchTerm},
        {"firstName": searchTerm},
        {"lastName": searchTerm},
        {"email": searchTerm}];
    return userModel.find().or(searchArray);
}