var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
mongoose.Promise = require("q").Promise;

var pageModel = mongoose.model("PageModel", pageSchema);
var websiteModel = require("../website/website.model.server");

require("../models.server");

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.addWidget = addWidget;
pageModel.removeWidget = removeWidget;

module.exports = pageModel;

function addWidget(pageId, widgetId) {
    return pageModel.findById(pageId)
        .then(function (page) {
            page.widgets.push(widgetId);
            return page.save();
        })
}

function removeWidget(pageId, widgetId) {
    return websiteModel.findById(pageId)
        .then(function (page) {
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        })
}

function createPage(websiteId, page) {
    page._website = websiteId;
    return pageModel.create(page)
        .then(function (newPage) {
        return websiteModel.addPage(websiteId, newPage._id);
    });
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({"_website": websiteId});
}

function findPageById(pageId) {

    return pageModel.findById(pageId);
}

function updatePage(pageId, page) {

    delete page._website;
    delete page.dateCreated;
    return pageModel.update({_id: pageId}, {$set: page});
}

function deletePage(pageId) {
    return pageModel.findById(pageId)
        .then(function (page) {
            return pageModel.remove({_id: pageId})
                .then(function () {
                    return websiteModel.removePage(page._website, pageId);
                });
        });
}