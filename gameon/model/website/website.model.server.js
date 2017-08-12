var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
mongoose.Promise = require("q").Promise;

var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
var userModel = require("../user/user.model.server");

require("../models.server");

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.addPage = addPage;
websiteModel.removePage = removePage;

module.exports = websiteModel;

function addPage(websiteId, pageId) {
    return websiteModel.findById(websiteId)
        .then(function (website) {
            website.pages.push(pageId);
            return website.save();
        })
}

function removePage(websiteId, pageId) {
    return websiteModel.findById(websiteId)
        .then(function (website) {
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        })
}

function createWebsiteForUser(userId, website) {
    website._user = userId;
    return websiteModel.create(website)
        .then(function (newWebsite) {
            return userModel.addWebsite(userId, newWebsite._id);
        });
}

function findAllWebsitesForUser(userId) {
    return websiteModel.find({"_user": userId});
}

function findWebsiteById(websiteId) {

    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {

    delete website._user;
    delete website.dateCreated;
    return websiteModel.update({_id: websiteId}, {$set: website});
}

function deleteWebsite(websiteId) {
    return websiteModel.findById(websiteId)
        .then(function (website) {
            return websiteModel.remove({_id: websiteId})
                .then(function () {
                    return userModel.removeWebsite(website._user, websiteId);
                });
        });
}