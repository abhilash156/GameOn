var mongoose = require("mongoose");

var gameSchema = mongoose.Schema({
    _user: {type : mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    name: String,
    description: String,
    pages: [{type : mongoose.Schema.Types.ObjectId, ref: "PageModel"}],
    dateCreated: {type: Date, default: Date.now}
}, {collection: "game"});

module.exports = gameSchema;

