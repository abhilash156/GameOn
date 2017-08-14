(function () {
    angular.module("GameOn")
        .factory("giantBombService", giantBombService);

    function giantBombService($http) {

        var api = {
            "searchGames": searchGames,
            "getGameById": getGameById,
            "getGameObject": getGameObject
        };

        return api;

        function searchGames(searchQuery) {
            var url = "/api/redirectGB";
            var body = {
                "requestType": "GET",
                "requestURL": "/api/search/?query=\"" + searchQuery + "\"&resources=game"
            };
            return $http.post(url, body).then(successCallback, errorCallback);
        }

        function getGameById(gameId) {
            var url = "/api/redirectGB";
            var body = {
                "requestType": "GET",
                "requestURL": "/api/game/3030-" + gameId + "/?"
            };
            return $http.post(url, body).then(successCallback, errorCallback);
        }

        function getGameObject(gameData) {
            return {
                "externalId": gameData.id,
                "name": gameData.name,
                "description": gameData.deck,
                "cover": gameData.image.small_url
            }
        }

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();