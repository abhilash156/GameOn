var app = require("../../express");

var userModel = require("../model/user/user.model.server");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new LocalStrategy(localStrategy));

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);
var bcrypt = require("bcrypt-nodejs");

app.post("/api/user", createUser);
app.get("/api/user", findUserByUsername);
app.get("/api/users", getAllUsers);
app.get("/auth/google", passport.authenticate('google', {scope: ['profile', 'email']}));
app.post("/api/login", passport.authenticate('local'), login);
app.get("/api/logout", logout);
app.get("/api/checkLogin", checkLogin);
app.get("/api/user/:userId", findUserById);
app.put("/api/user/:userId", updateUser);
app.delete("/api/user/:userId", deleteUser);

app.get("/api/user/:userId/liked", findLikedGamesByUser);
app.get("/api/user/:userId/liked/:gameId", isLiked);
app.get("/api/user/:userId/owned", findOwnedGamesByUser);
app.get("/api/user/:userId/owned/:gameId", isOwned);
app.get("/api/user/:userId/following", getFollowing);
app.get("/api/user/:userId/following/:userId2", isFollowing);
app.get("/api/user/:userId/followers", getFollowers);
app.get("/api/user/:userId/followers/:userId2", isFollower);

app.get("/api/user/:userId/buy/:gameId", buyGame);
app.get("/api/user/:userId/like/:gameId", likeGame);
app.get("/api/user/:userId/unlike/:gameId", unLikeGame);
app.get("/api/user/:userId/follow/:userId2", followUser);
app.get("/api/user/:userId/unfollow/:userId2", unFollowUser);
app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '#!/profile',
    failureRedirect: '#!/login'
}));

var googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
};

passport.use(new GoogleStrategy(googleConfig, googleStrategy));

function createUser(request, response) {
    var user = request.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
        .then(function (newUser) {
            response.send(newUser);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}


function googleStrategy(token, refreshToken, profile, done) {
    userModel
        .findUserByGoogleId(profile.id)
        .then(
            function(user) {
                if(user) {
                    return done(null, user);
                } else {
                    var email = profile.emails[0].value;
                    var emailParts = email.split("@");
                    var newGoogleUser = {
                        username:  emailParts[0],
                        firstName: profile.name.givenName,
                        lastName:  profile.name.familyName,
                        email:     email,
                        google: {
                            id:    profile.id,
                            token: token
                        }
                    };
                    return userModel.createUser(newGoogleUser);
                }
            },
            function(err) {
                if (err) { return done(err); }
            }
        )
        .then(
            function(user){
                return done(null, user);
            },
            function(err){
                if (err) { return done(err); }
            }
        );
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            }
        );
}

function localStrategy(username, password, done) {
    userModel.findUserByUsername(username)
        .then(function (user) {
            if (user && bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }, function (error) {
            if (error) {
                return done(error);
            }
        });
}

function login(request, response) {
    var user = request.user;
    response.json(user);
}

function loginWithGoogle(request, response) {
    console.log("Google");
    var user = request.user;
    response.json(user);
}

function logout(request, response) {
    request.logOut();
    response.send(200);
}

function checkLogin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
}

function findUserByUsername(request, response) {
    var username = request.query.username;
    userModel.findUserByUsername(username)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findUserById(request, response) {
    var userId = request.params.userId;
    userModel.findUserById(userId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function updateUser(request, response) {
    var user = request.body;
    var userId = request.params.userId;
    userModel.updateUser(userId, user)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function deleteUser(request, response) {
    var userId = request.params.userId;

    userModel.deleteUser(userId)
        .then(function () {
            response.sendStatus(200);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findOwnedGamesByUser(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("games")
        .exec()
        .then(function (user) {
            response.json(user.games);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function findLikedGamesByUser(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("liked")
        .exec()
        .then(function (user) {
            response.json(user.liked);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function getFollowing(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("following")
        .exec()
        .then(function (user) {
            response.json(user.following);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isFollowing(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.following.indexOf(userId2) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isFollower(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.followers.indexOf(userId2) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isLiked(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.liked.indexOf(gameId) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function isOwned(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.findUserById(userId)
        .then(function (user) {
            if (user.games.indexOf(gameId) >= 0) {
                response.send(true);
            } else {
                response.send(false);
            }
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function likeGame(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.addLike(userId, gameId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function buyGame(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.addGame(userId, gameId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function unLikeGame(request, response) {
    var userId = request.params.userId;
    var gameId = request.params.gameId;

    userModel.removeLike(userId, gameId)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function getFollowers(request, response) {
    var userId = request.params.userId;

    userModel.findUserById(userId).populate("followers")
        .exec()
        .then(function (user) {
            response.json(user.followers);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function followUser(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.addFollow(userId, userId2)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function unFollowUser(request, response) {
    var userId = request.params.userId;
    var userId2 = request.params.userId2;

    userModel.removeFollow(userId, userId2)
        .then(function (user) {
            response.send(user);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}

function getAllUsers(request, response) {
    userModel.getAllUsers()
        .then(function (users) {
            response.send(users);
        }, function (error) {
            response.sendStatus(404).error(error);
        });
}