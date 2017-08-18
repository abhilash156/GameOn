var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String},
    firstName: String,
    lastName: String,
    email: String,
    cover: String,
    userType: {type: String, enum: ['PLAYER', 'SELLER', 'ADMIN'], default: "PLAYER"},
    games: [{type: mongoose.Schema.Types.ObjectId, ref: "GameModel"}],
    liked: [{type: mongoose.Schema.Types.ObjectId, ref: "GameModel"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    google: {
        id: String,
        token: String
    },
    inventory: [{
        id: {type: mongoose.Schema.Types.ObjectId, ref: "GameModel"},
        quantity: String,
        cost: String
    }],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "user"});

module.exports = userSchema;
