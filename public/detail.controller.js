(function () {
    angular.module("GameOn")
        .controller("detailController", detailController);

    function detailController() {
        alert("IndetailController");
        var model = this;

        model.getGameDetailsById = getGameDetailsById;

        function init() {
            model.game = {
                "title": "Dota 2",
                "description": "Harshit plays this!",
                "url": "http://pre02.deviantart.net/0c7e/th/pre/i/2011/028/5/4/dota_2_poster_by_jmc5221-d387ukq.jpg"
            };
        }
        init();

        function getGameDetailsById(gameId) {
        }

        //getGameDetailsById("4");
    }
})();