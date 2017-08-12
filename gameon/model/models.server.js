var mongoose = require("mongoose");
mongoose.Promise = require("q").Promise;

var connectionString = "mongodb://52.15.130.243:27017/WebAppMaker";

if (process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    var connectionUrl = process.env.MLAB_CONNECTION_URL;
    connectionString = 'mongodb://' + username + ':' + password + connectionUrl;
}

module.exports = mongoose.connect(connectionString, {useMongoClient: true});