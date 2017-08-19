(function () {
    angular.module("GameOn").factory("userService", userService);

    function userService($http) {
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "getOwnedGamesByUser": getOwnedGamesByUser,
            "getInventoryByUser": getInventoryByUser,
            "getLikedGamesByUser": getLikedGamesByUser,
            "login": login,
            "checkLogin": checkLogin,
            "logout": logout,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
            "followUser": followUser,
            "unFollowUser": unFollowUser,
            "getFollowing": getFollowing,
            "getFollowers": getFollowers,
            "isFollowing": isFollowing,
            "isFollower": isFollower,
            "getUsers": getUsers,
            "searchUsers": searchUsers,
            "upsertInventory": upsertInventory,
            "removeInventory": removeInventory
        };
        return api;

        function upsertInventory(userId, inventory) {
            var url = "/api/user/" + userId + "/inventory";
            return $http.post(url, inventory).then(successCallback, errorCallback);
        }

        function removeInventory(userId, gameId) {
            var url = "/api/user/" + userId + "/inventory/" + gameId;

            return $http.delete(url).then(successCallback, errorCallback);
        }

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url, user).then(successCallback, errorCallback);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getUsers() {
            var url = "/api/users";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function searchUsers(searchTerm) {
            var url = "/api/searchUsers?searchTerm=" + searchTerm;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function login(username, password) {
            var url = "/api/login";

            return $http.post(url, {username: username, password: password})
                .then(successCallback, function (response, error) {
                    if (response.status === 401) {
                        return 401;
                    } else {
                        errorCallback();
                    }
                });
        }

        function getOwnedGamesByUser(userId) {
            var url = "/api/user/" + userId + "/owned";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getInventoryByUser(userId) {
            var url = "/api/user/" + userId + "/inventory";

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

        function followUser(userId, userId2) {
            var url = "/api/user/" + userId + "/follow/" + userId2;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function unFollowUser(userId, userId2) {
            var url = "/api/user/" + userId + "/unfollow/" + userId2;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getFollowing(userId) {
            var url = "/api/user/" + userId + "/following";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function isFollowing(userId, userId2) {
            var url = "/api/user/" + userId + "/following/" + userId2;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function isFollower(userId, userId2) {
            var url = "/api/user/" + userId + "/followers/" + userId2;

            return $http.get(url).then(successCallback, errorCallback);
        }

        function getFollowers(userId) {
            var url = "/api/user/" + userId + "/followers";

            return $http.get(url).then(successCallback, errorCallback);
        }

        function successCallback(response) {
            return response.data;
        }

        function errorCallback() {
            return null;
        }
    }
})();
