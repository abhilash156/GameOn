var mongoose = require("mongoose");

var inventorySchema = mongoose.Schema({
    _seller: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
    name: String,
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: "GameModel"},
    externalId: String,
    quantity: String,
    price: String
}, {collection: "inventory"});

module.exports = inventorySchema;