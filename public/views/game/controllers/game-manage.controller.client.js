(function () {
    angular
        .module("GameOn")
        .controller("gameManageController", gameManageController);

    function gameManageController($routeParams, gameService, $location, sessionUser, userService) {
        var model = this;
        model.updateListing = updateListing;
        model.deleteListing = deleteListing;
        model.userId = sessionUser._id;
        model.gameId = $routeParams["gameId"];
        model.loggedUser = sessionUser;
        model.inventory = null;

        function init() {
            userService.getInventoryByUser(model.userId)
                .then(function (listings) {
                    model.listings = listings;
                    for (var i = 0; i < model.listings.length; i++) {
                        if (model.listings[i]._game._id === model.gameId) {
                            model.inventory = angular.copy(model.listings[i]);
                            model.inventory.name = model.listings[i]._game.name;
                            model.inventory._game = model.gameId;
                            break;
                        }
                    }
                    if (model.inventory === null) {
                        gameService.findGameById(model.gameId)
                            .then(function (game) {
                                model.game = game;
                                model.inventory = {};
                                model.inventory._game = model.gameId;
                                model.inventory.name = game.name;
                                model.inventory.price = 0;
                                model.inventory.quantity = 0;
                            });
                    }
                });


        }

        init();

        function updateListing(inventory) {
            userService.upsertInventory(model.userId, inventory)
                .then(function () {
                    $location.url("/profile");
                });
        }

        function deleteListing() {
            userService.removeInventory(model.userId, model.gameId)
                .then(function () {
                    $location.url("/profile");
                });
        }
    }
})();
