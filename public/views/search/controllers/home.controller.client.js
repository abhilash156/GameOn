(function () {
    angular
        .module("GameOn")
        .controller("homeController", homeController);

    function homeController($location, giantBombService, sessionUser) {
        var model = this;
        model.loggedUser = sessionUser;

        function init() {
        }

        init();

    }
})();