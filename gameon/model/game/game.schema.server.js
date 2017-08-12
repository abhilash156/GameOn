var mongoose = require("mongoose");

var gameSchema = mongoose.Schema({
    name: String,
    description: String,
    cover: String,
    externalId: {type: String, unique: true},
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: "UserModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "game"});

module.exports = gameSchema;

