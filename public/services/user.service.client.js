(function () {
    angular.module("GameOn").factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "getOwnedGamesByUser": getOwnedGamesByUser,
            "getLikedGamesByUser": getLikedGamesByUser,
            "checkLogin": checkLogin,
            "logout": logout,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function createUser(user) {
            var url = "/api/user";

            return $http.post(url, user).then(successCallback, errorCallback);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findUserByCredentials(username, password) {
            var url = "/api/login";

            return $http.post(url, {username: username, password: password})
                .then(successCallback, errorCallback);
        }

        function getOwnedGamesByUser(userId) {
            var url = "/api/user/" + userId + "/owned";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getLikedGamesByUser(userId) {
            var url = "/api/user/" + userId + "/liked";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;

            return $http.put(url, user).then(successCallback, errorCallback);
        }

        function deleteUser(userId) {
            var url = "/api/user/" + userId;

            return $http.delete(url).then(successCallback, errorCallback);
        }

        function checkLogin() {
            return $http.get("/api/checkLogin").then(successCallback, errorCallback);
        }

        function logout() {
            return $http.get("/api/logout").then(successCallback, errorCallback);
        }


        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }


    }
})();
