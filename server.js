var app = require('./express');
var express = app.express;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(session({
    secret: 'Draco Dormiens Nunquam Titillandus',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

require("./gameon/app");

port = process.env.PORT || 3030;
app.listen(port);

console.log("Server Started");