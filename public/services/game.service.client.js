(function () {
    angular.module("GameOn").factory("gameService", gameService);

    function gameService($http, giantBombService) {
        var api = {
            "createGame": createGame,
            "findGamesByUser": findGamesByUser,
            "findLikedGamesByUser": findLikedGamesByUser,
            "findGameByExternalId": findGameByExternalId,
            "getFollowers": getFollowers,
            "getFollowing": getFollowing,
            "findGameById": findGameById,
            "updateGame": updateGame,
            "deleteGame": deleteGame
        };

        return api;

        function createGame(game) {
            var url = "/api/game";

            return $http.post(url, game).then(successCallback, errorCallback);
        }

        function findGamesByUser(userId) {
            var url = "/api/user/" + userId + "/game";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findLikedGamesByUser(userId) {
            var url = "/api/user/" + userId + "/liked";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getFollowers(userId) {
            var url = "/api/user/" + userId + "/followers";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getFollowing(userId) {
            var url = "/api/user/" + userId + "/following";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findGameById(gameId) {
            var url = "/api/game/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findGameByExternalId(externalId) {
            var url = "/api/game?externalId=" + externalId;

            return $http.get(url).then(successCallback, function () {
                return giantBombService.getGameById(externalId)
                    .then(function (gameData) {
                        return createGame(giantBombService.getGameObject(gameData.results))
                    })
            });
        }

        function updateGame(gameId, game) {
            var url = "/api/game/" + gameId;

            return $http.put(url, game).then(successCallback, errorCallback);
        }

        function deleteGame(gameId) {
            var url = "/api/game/" + gameId;

            return $http.delete(url).then(successCallback, errorCallback);
        }

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }

        function errorCallbackFor503() {
            giantBombService.getGameById()
        }
    }
})();