(function () {
    angular
        .module("GameOn")
        .controller("homeController", homeController);

    function homeController($location, sessionUser) {
        var model = this;

        model.search = search;
        model.loggedUser = sessionUser;

        function init() {
        }

        init();
        function search(searchTerm) {
            $location.url("/search?q=" + searchTerm);
        }

    }
})();