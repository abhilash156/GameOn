(function () {
    angular.module("WebAppMaker").factory("gameService", gameService);

    function gameService($http) {
        var api = {
            "createGame": createGame,
            "findGamesByUser": findGamesByUser,
            "findLikedGamesByUser": findLikedGamesByUser,
            "getFollowers": getFollowers,
            "getFollowing": getFollowing,
            "findGameById": findGameById,
            "updateGame": updateGame,
            "deleteGame": deleteGame
        };

        return api;

        function createGame(userId, game) {
            var url = "/api/user/" + userId + "/game";

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