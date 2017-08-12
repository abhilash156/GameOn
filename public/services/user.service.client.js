(function () {
    angular.module("WebAppMaker").factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
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
            var url = "/api/user?username=" + username + "&password=" + password;

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

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();
