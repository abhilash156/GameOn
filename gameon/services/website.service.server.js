var app = require("../../express");

var websiteModel = require("../model/website/website.model.server");

app.post("/api/user/:userId/website", createWebsite);
app.get("/api/user/:userId/website", findWebsitesByUser);
app.get("/api/website/:websiteId", findWebsiteById);
app.put("/api/website/:websiteId", updateWebsite);
app.delete("/api/website/:websiteId", deleteWebsite);

function createWebsite(request, response) {
    var userId = request.params.userId;
    var website = request.body;

    websiteModel.createWebsiteForUser(userId, website)
        .then(function (newWebsite) {
            response.send(newWebsite);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findWebsitesByUser(request, response) {
    var userId = request.params.userId;

    websiteModel.findAllWebsitesForUser(userId)
        .then(function (websites) {
            response.send(websites);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findWebsiteById(request, response) {
    var websiteId = request.params.websiteId;

    websiteModel.findWebsiteById(websiteId)
        .then(function (website) {
            response.send(website);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function updateWebsite(request, response) {
    var website = request.body;
    var websiteId = request.params.websiteId;

    websiteModel.updateWebsite(websiteId, website)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deleteWebsite(request, response) {
    var websiteId = request.params.websiteId;

    websiteModel.deleteWebsite(websiteId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}