var mongoose = require("mongoose");
var inventorySchema = require("./inventory.schema.server");
mongoose.Promise = require("q").Promise;

var inventoryModel = mongoose.model("InventoryModel", inventorySchema);
var userModel = require("../user/user.model.server");

require("../models.server");

inventoryModel.createInventory = createInventory;
inventoryModel.findAllListingForSeller = findAllListingForSeller;
inventoryModel.findInventoryById = findInventoryById;
inventoryModel.updateInventory = updateInventory;
inventoryModel.deleteInventory = deleteInventory;

module.exports = inventoryModel;

function createInventory(sellerId, inventory) {
    inventory._seller = sellerId;
    return inventoryModel.create(inventory)
        .then(function (newInventory) {
        return userModel.addInventory(sellerId, newInventory._id);
    });
}

function findAllListingForSeller(sellerId) {
    return inventoryModel.find({"_seller": sellerId});
}

function findInventoryById(inventoryId) {

    return inventoryModel.findById(inventoryId);
}

function updateInventory(inventoryId, inventory) {

    delete inventory._seller;
    delete inventory.dateCreated;
    return inventoryModel.update({_id: inventoryId}, {$set: inventory});
}

function deleteInventory(inventoryId) {
    return inventoryModel.findById(inventoryId)
        .then(function (inventory) {
            return inventoryModel.remove({_id: inventoryId})
                .then(function () {
                    return userModel.removeInventory(inventory._seller, inventoryId);
                });
        });
}