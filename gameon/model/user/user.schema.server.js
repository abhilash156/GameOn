var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    games: [{type: mongoose.Schema.Types.ObjectId, ref: "GameModel"}],
    liked: [{type: mongoose.Schema.Types.ObjectId, ref: "GameModel"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    dob: Date,
    dateCreated: {type: Date, default: Date.now}
}, {collection: "user"});

module.exports = userSchema;
