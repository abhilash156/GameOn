(function () {
    angular.module("GameOn").factory("gameService", gameService);

    function gameService($http, giantBombService) {
        var api = {
            "createGame": createGame,
            "findGameByExternalId": findGameByExternalId,
            "isLiked": isLiked,
            "isOwned": isOwned,
            "findGameById": findGameById,
            "updateGame": updateGame,
            "deleteGame": deleteGame,
            "likeGame": likeGame,
            "buyGame": buyGame,
            "unLikeGame": unLikeGame
        };

        return api;

        function createGame(game) {
            var url = "/api/game";

            return $http.post(url, game).then(successCallback, errorCallback);
        }

        function likeGame(userId, gameId) {
            var url = "/api/user/" + userId + "/like/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function buyGame(userId, gameId) {
            var url = "/api/user/" + userId + "/buy/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function unLikeGame(userId, gameId) {
            var url = "/api/user/" + userId + "/unlike/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function isLiked(userId, gameId) {
            var url = "/api/user/" + userId + "/liked/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function isOwned(userId, gameId) {
            var url = "/api/user/" + userId + "/owned/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findGameById(gameId) {
            var url = "/api/game/" + gameId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findGameByExternalId(externalId) {
            var url = "/api/game?externalId=" + externalId;


            return $http.get(url).then(function (response) {
                if (response.status === 204) {
                    return giantBombService.getGameById(externalId)
                        .then(function (gameData) {
                            return createGame(giantBombService.getGameObject(gameData.results))
                        })
                } else {
                    return successCallback(response);
                }
            }, errorCallback);
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
    }
})();