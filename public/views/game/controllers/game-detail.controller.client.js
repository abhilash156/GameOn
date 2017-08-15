(function () {
    angular
        .module("GameOn")
        .controller("gameDetailController", gameDetailController);

    function gameDetailController($routeParams, gameService, giantBombService, $location, sessionUser) {
        var model = this;

        model.userId = sessionUser._id;
        model.gameId = $routeParams["wid"];
        model.liked = false;
        model.owned = false;
        model.getGameURL = getGameURL;
        model.likeGame = likeGame;
        model.unLikeGame = unLikeGame;
        model.buyGame = buyGame;

        function init() {
            /*gameService.findGameById(model.gameId)
                .then(function (game) {
                    model.game = game;
                    giantBombService.getGameById(game.externalId)
                        .then(function (gameData) {
                            model.gameInfo = gameData.results;
                        });
                });*/

            gameService.isLiked(model.userId, model.gameId)
                .then(function (value) {
                    model.liked = value;
                });

            gameService.isOwned(model.userId, model.gameId)
                .then(function (value) {
                    model.owned = value;
                });
        }

        init();

        function getGameURL(externalId) {
            gameService.findGameByExternalId(externalId)
                .then(function (game) {
                    $location.url("/game/" + game._id + "/detail");
                });
        }

        function likeGame() {
            gameService.likeGame(model.userId, model.gameId)
                .then(function (game) {
                    model.liked = !model.liked;
                });
        }

        function buyGame() {
            gameService.buyGame(model.userId, model.gameId)
                .then(function (game) {
                    model.owned = true;
                });
        }

        function unLikeGame() {
            gameService.unLikeGame(model.userId, model.gameId)
                .then(function (game) {
                    model.liked = !model.liked;
                });
        }

        model.gameInfo = {
            "aliases": null,
            "api_detail_url": "https://www.giantbomb.com/api/game/3030-49973/",
            "date_added": "2015-06-15 19:21:55",
            "date_last_updated": "2017-08-07 10:44:05",
            "deck": "Explore a lush, post-apocalyptic world inhabited by robotic beasts while uncovering secrets of the past.",
            "description": "<h2>Overview</h2><p><a href=\"/guerrilla-games/3010-2392/\" data-ref-id=\"3010-2392\">Guerrilla Games</a>' first new series since <a href=\"/killzone/3025-405/\" data-ref-id=\"3025-405\">Killzone</a> begins in a world after the end of modern civilization. A \"darkness\" has swept the land and left cities barren. After over a thousand years, remaining humans migrated like their ancestors to the far reaches of the Earth. In this world, skyscrapers stand as ancient ruins and robotic creatures roam the land like prehistoric beasts.</p><p>The player takes on the role of a young woman named <a href=\"/aloy/3005-31979/\" data-ref-id=\"3005-31979\">Aloy</a> who hunts these robots, using a combination of a spear and a bow with many kinds of arrows. Arrows shown include electric shots and grappling lines to tie down larger robots. She appears to be gathering materials for the people of her community.</p><p>Elsewhere in the land where nature has reclaimed most of the world, some large cities have arisen with people acting again like \"kings.\"</p><p>The main character says that the balance between AI and people cannot remain, but she \"will be ready\" for the coming challenges.</p><p>The game was shown for the first time at Sony's <a href=\"/e3-2015/3015-8442/\" data-ref-id=\"3015-8442\">E3 2015</a> Press Conference.</p><h2>Collector's Edition</h2><figure data-align=\"right\" data-size=\"small\" data-img-src=\"https://static.giantbomb.com/uploads/scale_super/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg\" data-ref-id=\"1300-2911921\" data-ratio=\"0.706\" data-width=\"1500\" data-embed-type=\"image\" style=\"width: 1500px\"><a class=\"fluid-height\" style=\"padding-bottom:70.6%\" href=\"https://static.giantbomb.com/uploads/scale_super/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg\" data-ref-id=\"1300-2911921\"><img alt=\"No Caption Provided\" src=\"https://static.giantbomb.com/uploads/scale_small/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg\" srcset=\"https://static.giantbomb.com/uploads/original/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg 1500w, https://static.giantbomb.com/uploads/scale_super/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg 960w, https://static.giantbomb.com/uploads/scale_medium/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg 480w, https://static.giantbomb.com/uploads/scale_small/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg 320w\" sizes=\"(max-width: 320px) 100vw, 320px\" data-width=\"320\"></a></figure><p>The Collector's Edition of Horizon: Zero Dawn includes:</p><ul><li>A copy of the game in a <a href=\"/steelbook/3015-7455/\" data-ref-id=\"3015-7455\">SteelBook</a> case.</li><li>9\" <a href=\"/aloy/3005-31979/\" data-ref-id=\"3005-31979\">Aloy</a> statue by Gentle Giant.</li><li>48-page art book.</li><li>PS4 Dynamic Theme</li><li>Carja Storm Ranger Outfit/Bow</li><li>Banuk Trailblazer Outfit/Bow</li><li>Banuk Traveler Pack</li><li>Carja Trader Pack</li><li>Nora Keeper Pack</li><li>Nora Machine Trapper Pack</li></ul>",
            "expected_release_day": null,
            "expected_release_month": null,
            "expected_release_quarter": null,
            "expected_release_year": null,
            "id": 49973,
            "image": {
                "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "small_url": "https://www.giantbomb.com/api/image/scale_small/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "super_url": "https://www.giantbomb.com/api/image/scale_large/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2920671-horizon%20-%20zero%20dawn%20v2.jpg",
                "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2920671-horizon%20-%20zero%20dawn%20v2.jpg"
            },
            "name": "Horizon Zero Dawn",
            "number_of_user_reviews": 0,
            "original_game_rating": [{
                "api_detail_url": "https://www.giantbomb.com/api/game_rating/3065-1/",
                "id": 1,
                "name": "ESRB: T"
            }, {"api_detail_url": "https://www.giantbomb.com/api/game_rating/3065-2/", "id": 2, "name": "PEGI: 16+"}],
            "original_release_date": "2017-02-28 00:00:00",
            "platforms": [{
                "api_detail_url": "https://www.giantbomb.com/api/platform/3045-146/",
                "id": 146,
                "name": "PlayStation 4",
                "site_detail_url": "https://www.giantbomb.com/playstation-4/3045-146/",
                "abbreviation": "PS4"
            }],
            "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/",
            "images": [{
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/28/288090/2945732-3784661353-RHX5i.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/28/288090/2945732-3784661353-RHX5i.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/28/288090/2945732-3784661353-RHX5i.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/28/288090/2945732-3784661353-RHX5i.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/28/288090/2945732-3784661353-RHX5i.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/28/288090/2945732-3784661353-RHX5i.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/28/288090/2945732-3784661353-RHX5i.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/8/85316/2925452-horizon+zero+dawn%E2%84%A2_20170310212646.jpg",
                "tags": "All Images, PS4 Pro Screenshots"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/8/85316/2925432-ps_messages_20170304_234146.jpg",
                "tags": "All Images, PS4 Pro Screenshots"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/3699/2920671-horizon+-+zero+dawn+v2.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2911922-71nkbg-9fil._ac_sl1500_.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2911921-a1vp7srqaml._ac_sl1500_.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2911920-71pyio27fol._ac_sl1500_.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2911917-screen+shot+2017-01-12+at+8.34.48+am.png",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2911916-screen+shot+2017-01-12+at+8.36.13+am.png",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886210-dsc03115.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886210-dsc03115.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886210-dsc03115.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886210-dsc03115.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2886210-dsc03115.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2886210-dsc03115.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2886210-dsc03115.jpg",
                "tags": "All Images, Sony, PAX West 2016, PAX West 2016 Booth"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886191-dsc02668.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886191-dsc02668.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886191-dsc02668.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886191-dsc02668.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2886191-dsc02668.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2886191-dsc02668.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2886191-dsc02668.jpg",
                "tags": "All Images, Sony, PAX West 2016, PAX West 2016 Booth"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886182-dsc02659.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886182-dsc02659.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/1992/2886182-dsc02659.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/1992/2886182-dsc02659.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/1992/2886182-dsc02659.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/1992/2886182-dsc02659.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/1992/2886182-dsc02659.jpg",
                "tags": "All Images, Sony, PAX West 2016, PAX West 2016 Booth"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/0/8169/2862037-horizon_zero_dawn.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/0/8169/2862037-horizon_zero_dawn.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/0/8169/2862037-horizon_zero_dawn.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/0/8169/2862037-horizon_zero_dawn.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/0/8169/2862037-horizon_zero_dawn.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/0/8169/2862037-horizon_zero_dawn.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/0/8169/2862037-horizon_zero_dawn.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759345-0873016296-18225.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759345-0873016296-18225.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759345-0873016296-18225.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759345-0873016296-18225.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759345-0873016296-18225.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759345-0873016296-18225.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759345-0873016296-18225.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759344-9651977306-18660.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759344-9651977306-18660.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759344-9651977306-18660.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759344-9651977306-18660.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759344-9651977306-18660.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759344-9651977306-18660.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759344-9651977306-18660.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759343-0895026177-18658.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759343-0895026177-18658.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759343-0895026177-18658.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759343-0895026177-18658.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759343-0895026177-18658.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759343-0895026177-18658.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759343-0895026177-18658.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759342-2780610798-18849.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759342-2780610798-18849.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759342-2780610798-18849.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759342-2780610798-18849.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759342-2780610798-18849.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759342-2780610798-18849.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759342-2780610798-18849.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759341-7352876667-18849.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759341-7352876667-18849.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759341-7352876667-18849.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759341-7352876667-18849.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759341-7352876667-18849.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759341-7352876667-18849.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759341-7352876667-18849.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759340-0441963469-18660.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759340-0441963469-18660.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759340-0441963469-18660.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759340-0441963469-18660.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759340-0441963469-18660.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759340-0441963469-18660.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759340-0441963469-18660.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759339-3969335961-18223.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759339-3969335961-18223.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759339-3969335961-18223.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759339-3969335961-18223.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759339-3969335961-18223.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759339-3969335961-18223.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759339-3969335961-18223.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759338-3218129830-18660.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759338-3218129830-18660.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/5/57793/2759338-3218129830-18660.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/5/57793/2759338-3218129830-18660.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/5/57793/2759338-3218129830-18660.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/5/57793/2759338-3218129830-18660.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/5/57793/2759338-3218129830-18660.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759159-image_horizon_zero_dawn-28643-3283_0009.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759158-image_horizon_zero_dawn-28643-3283_0008.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759157-image_horizon_zero_dawn-28643-3283_0007.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759156-image_horizon_zero_dawn-28643-3283_0006.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759155-image_horizon_zero_dawn-28643-3283_0005.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759154-image_horizon_zero_dawn-28643-3283_0004.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759153-image_horizon_zero_dawn-28643-3283_0003.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759152-image_horizon_zero_dawn-28643-3283_0002.jpg",
                "tags": "All Images"
            }, {
                "icon_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "medium_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "screen_url": "https://static.giantbomb.com/uploads/screen_medium/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "small_url": "https://static.giantbomb.com/uploads/square_avatar/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "super_url": "https://static.giantbomb.com/uploads/scale_large/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "thumb_url": "https://static.giantbomb.com/uploads/scale_small/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "tiny_url": "https://static.giantbomb.com/uploads/square_mini/2/22934/2759151-image_horizon_zero_dawn-28643-3283_0001.jpg",
                "tags": "All Images"
            }],
            "videos": [{
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-10309/",
                "id": 10309,
                "name": "E3 2015: Guerrilla's New Project is Horizon: Zero Dawn",
                "site_detail_url": "https://www.giantbomb.com/videos/e3-2015-guerrilla-s-new-project-is-horizon-zero-da/2300-10309/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-10323/",
                "id": 10323,
                "name": "E3 2015: We Talk Over the Sony Press Conference",
                "site_detail_url": "https://www.giantbomb.com/videos/e3-2015-we-talk-over-the-sony-press-conference/2300-10323/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-10804/",
                "id": 10804,
                "name": "We Talk Over Sony's Paris Games Week Press Conference",
                "site_detail_url": "https://www.giantbomb.com/videos/we-talk-over-sonys-paris-games-week-press-conferen/2300-10804/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11296/",
                "id": 11296,
                "name": "E3 2016: 10 Minutes of Horizon Zero Dawn Gameplay",
                "site_detail_url": "https://www.giantbomb.com/videos/e3-2016-10-minutes-of-horizon-zero-dawn-gameplay/2300-11296/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11301/",
                "id": 11301,
                "name": "We Talk Over the Sony E3 2016 Press Conference",
                "site_detail_url": "https://www.giantbomb.com/videos/we-talk-over-the-sony-e3-2016-press-conference/2300-11301/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11883/",
                "id": 11883,
                "name": "Giant Bombcast 469: Meme Money, Meme Problems",
                "site_detail_url": "https://www.giantbomb.com/videos/giant-bombcast-469-meme-money-meme-problems/2300-11883/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11884/",
                "id": 11884,
                "name": "Giant Bombcast 469: Meme Money, Meme Problems (Premium)",
                "site_detail_url": "https://www.giantbomb.com/videos/giant-bombcast-469-meme-money-meme-problems-premiu/2300-11884/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11893/",
                "id": 11893,
                "name": "Quick Look: Horizon: Zero Dawn",
                "site_detail_url": "https://www.giantbomb.com/videos/quick-look-horizon-zero-dawn/2300-11893/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11896/",
                "id": 11896,
                "name": "Giant Bombcast 470: Switch Stance",
                "site_detail_url": "https://www.giantbomb.com/videos/giant-bombcast-470-switch-stance/2300-11896/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11937/",
                "id": 11937,
                "name": "Giant Bombcast 473: I’ve Always Cared About Science",
                "site_detail_url": "https://www.giantbomb.com/videos/giant-bombcast-473-ive-always-cared-about-science/2300-11937/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-11938/",
                "id": 11938,
                "name": "Giant Bombcast 473: I’ve Always Cared About Science (Premium)",
                "site_detail_url": "https://www.giantbomb.com/videos/giant-bombcast-473-ive-always-cared-about-science-/2300-11938/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/video/2300-12236/",
                "id": 12236,
                "name": "E3 2017: Gear Up for The Frozen Wilds of Horizon Zero Dawn",
                "site_detail_url": "https://www.giantbomb.com/videos/e3-2017-gear-up-for-the-frozen-wilds-of-horizon-ze/2300-12236/"
            }],
            "characters": [{
                "api_detail_url": "https://www.giantbomb.com/api/character/3005-31979/",
                "id": 31979,
                "name": "Aloy",
                "site_detail_url": "https://www.giantbomb.com/aloy/3005-31979/"
            }],
            "concepts": [{
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-24/",
                "id": 24,
                "name": "Stealth",
                "site_detail_url": "https://www.giantbomb.com/stealth/3015-24/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-198/",
                "id": 198,
                "name": "PlayStation Trophies",
                "site_detail_url": "https://www.giantbomb.com/playstation-trophies/3015-198/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-207/",
                "id": 207,
                "name": "Open World",
                "site_detail_url": "https://www.giantbomb.com/open-world/3015-207/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-382/",
                "id": 382,
                "name": "Skill Tree",
                "site_detail_url": "https://www.giantbomb.com/skill-tree/3015-382/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-464/",
                "id": 464,
                "name": "Third-Person Perspective",
                "site_detail_url": "https://www.giantbomb.com/third-person-perspective/3015-464/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-513/",
                "id": 513,
                "name": "Inventory",
                "site_detail_url": "https://www.giantbomb.com/inventory/3015-513/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-611/",
                "id": 611,
                "name": "World Map",
                "site_detail_url": "https://www.giantbomb.com/world-map/3015-611/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-2287/",
                "id": 2287,
                "name": "Female Protagonists",
                "site_detail_url": "https://www.giantbomb.com/female-protagonists/3015-2287/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-3766/",
                "id": 3766,
                "name": "Game Critics Awards",
                "site_detail_url": "https://www.giantbomb.com/game-critics-awards/3015-3766/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4304/",
                "id": 4304,
                "name": "Production Babies",
                "site_detail_url": "https://www.giantbomb.com/production-babies/3015-4304/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4558/",
                "id": 4558,
                "name": "Grapple Tying",
                "site_detail_url": "https://www.giantbomb.com/grapple-tying/3015-4558/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4942/",
                "id": 4942,
                "name": "Waypoint",
                "site_detail_url": "https://www.giantbomb.com/waypoint/3015-4942/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-5670/",
                "id": 5670,
                "name": "Platform Exclusive",
                "site_detail_url": "https://www.giantbomb.com/platform-exclusive/3015-5670/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-6244/",
                "id": 6244,
                "name": "Detective Mode",
                "site_detail_url": "https://www.giantbomb.com/detective-mode/3015-6244/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8442/",
                "id": 8442,
                "name": "E3 2015",
                "site_detail_url": "https://www.giantbomb.com/e3-2015/3015-8442/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8592/",
                "id": 8592,
                "name": "Action RPG",
                "site_detail_url": "https://www.giantbomb.com/action-rpg/3015-8592/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8601/",
                "id": 8601,
                "name": "Photo Mode ",
                "site_detail_url": "https://www.giantbomb.com/photo-mode/3015-8601/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8636/",
                "id": 8636,
                "name": "E3 2016",
                "site_detail_url": "https://www.giantbomb.com/e3-2016/3015-8636/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8665/",
                "id": 8665,
                "name": "PAX West 2016",
                "site_detail_url": "https://www.giantbomb.com/pax-west-2016/3015-8665/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8899/",
                "id": 8899,
                "name": "PlayStation Experience 2016",
                "site_detail_url": "https://www.giantbomb.com/playstation-experience-2016/3015-8899/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8914/",
                "id": 8914,
                "name": "Decima Engine",
                "site_detail_url": "https://www.giantbomb.com/decima-engine/3015-8914/"
            }],
            "developers": [{
                "api_detail_url": "https://www.giantbomb.com/api/company/3010-2392/",
                "id": 2392,
                "name": "Guerrilla Games",
                "site_detail_url": "https://www.giantbomb.com/guerrilla-games/3010-2392/"
            }],
            "first_appearance_characters": [{
                "api_detail_url": "https://www.giantbomb.com/api/character/3005-31979/",
                "id": 31979,
                "name": "Aloy",
                "site_detail_url": "https://www.giantbomb.com/aloy/3005-31979/"
            }],
            "first_appearance_concepts": [{
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-24/",
                "id": 24,
                "name": "Stealth",
                "site_detail_url": "https://www.giantbomb.com/stealth/3015-24/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-198/",
                "id": 198,
                "name": "PlayStation Trophies",
                "site_detail_url": "https://www.giantbomb.com/playstation-trophies/3015-198/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-207/",
                "id": 207,
                "name": "Open World",
                "site_detail_url": "https://www.giantbomb.com/open-world/3015-207/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-382/",
                "id": 382,
                "name": "Skill Tree",
                "site_detail_url": "https://www.giantbomb.com/skill-tree/3015-382/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-464/",
                "id": 464,
                "name": "Third-Person Perspective",
                "site_detail_url": "https://www.giantbomb.com/third-person-perspective/3015-464/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-513/",
                "id": 513,
                "name": "Inventory",
                "site_detail_url": "https://www.giantbomb.com/inventory/3015-513/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-611/",
                "id": 611,
                "name": "World Map",
                "site_detail_url": "https://www.giantbomb.com/world-map/3015-611/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-2287/",
                "id": 2287,
                "name": "Female Protagonists",
                "site_detail_url": "https://www.giantbomb.com/female-protagonists/3015-2287/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-3766/",
                "id": 3766,
                "name": "Game Critics Awards",
                "site_detail_url": "https://www.giantbomb.com/game-critics-awards/3015-3766/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4304/",
                "id": 4304,
                "name": "Production Babies",
                "site_detail_url": "https://www.giantbomb.com/production-babies/3015-4304/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4558/",
                "id": 4558,
                "name": "Grapple Tying",
                "site_detail_url": "https://www.giantbomb.com/grapple-tying/3015-4558/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-4942/",
                "id": 4942,
                "name": "Waypoint",
                "site_detail_url": "https://www.giantbomb.com/waypoint/3015-4942/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-5670/",
                "id": 5670,
                "name": "Platform Exclusive",
                "site_detail_url": "https://www.giantbomb.com/platform-exclusive/3015-5670/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-6244/",
                "id": 6244,
                "name": "Detective Mode",
                "site_detail_url": "https://www.giantbomb.com/detective-mode/3015-6244/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8442/",
                "id": 8442,
                "name": "E3 2015",
                "site_detail_url": "https://www.giantbomb.com/e3-2015/3015-8442/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8592/",
                "id": 8592,
                "name": "Action RPG",
                "site_detail_url": "https://www.giantbomb.com/action-rpg/3015-8592/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8601/",
                "id": 8601,
                "name": "Photo Mode ",
                "site_detail_url": "https://www.giantbomb.com/photo-mode/3015-8601/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8636/",
                "id": 8636,
                "name": "E3 2016",
                "site_detail_url": "https://www.giantbomb.com/e3-2016/3015-8636/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8665/",
                "id": 8665,
                "name": "PAX West 2016",
                "site_detail_url": "https://www.giantbomb.com/pax-west-2016/3015-8665/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8899/",
                "id": 8899,
                "name": "PlayStation Experience 2016",
                "site_detail_url": "https://www.giantbomb.com/playstation-experience-2016/3015-8899/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/concept/3015-8914/",
                "id": 8914,
                "name": "Decima Engine",
                "site_detail_url": "https://www.giantbomb.com/decima-engine/3015-8914/"
            }],
            "first_appearance_locations": [{
                "api_detail_url": "https://www.giantbomb.com/api/location/3035-1323/",
                "id": 1323,
                "name": "Colorado",
                "site_detail_url": "https://www.giantbomb.com/colorado/3035-1323/"
            }],
            "first_appearance_objects": [{
                "api_detail_url": "https://www.giantbomb.com/api/object/3055-5/",
                "id": 5,
                "name": "Grapple",
                "site_detail_url": "https://www.giantbomb.com/grapple/3055-5/"
            }],
            "first_appearance_people": [{
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-79993/",
                "id": 79993,
                "name": "Crispin Freeman",
                "site_detail_url": "https://www.giantbomb.com/crispin-freeman/3040-79993/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-102388/",
                "id": 102388,
                "name": "Ashly Burch",
                "site_detail_url": "https://www.giantbomb.com/ashly-burch/3040-102388/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-18965/",
                "id": 18965,
                "name": "Mark Cerny",
                "site_detail_url": "https://www.giantbomb.com/mark-cerny/3040-18965/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-63395/",
                "id": 63395,
                "name": "Hideo Kojima",
                "site_detail_url": "https://www.giantbomb.com/hideo-kojima/3040-63395/"
            }],
            "franchises": null,
            "genres": [{
                "api_detail_url": "https://www.giantbomb.com/api/genre/3060-5/",
                "id": 5,
                "name": "Role-Playing",
                "site_detail_url": "https://www.giantbomb.com/games/?wikiSlug=role-playing&wikiTypeId=3060&wikiId=5&genre=5"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/genre/3060-11/",
                "id": 11,
                "name": "Shooter",
                "site_detail_url": "https://www.giantbomb.com/games/?wikiSlug=shooter&wikiTypeId=3060&wikiId=11&genre=11"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/genre/3060-43/",
                "id": 43,
                "name": "Action-Adventure",
                "site_detail_url": "https://www.giantbomb.com/games/?wikiSlug=action-adventure&wikiTypeId=3060&wikiId=43&genre=43"
            }],
            "killed_characters": null,
            "locations": [{
                "api_detail_url": "https://www.giantbomb.com/api/location/3035-1323/",
                "id": 1323,
                "name": "Colorado",
                "site_detail_url": "https://www.giantbomb.com/colorado/3035-1323/"
            }],
            "objects": [{
                "api_detail_url": "https://www.giantbomb.com/api/object/3055-5/",
                "id": 5,
                "name": "Grapple",
                "site_detail_url": "https://www.giantbomb.com/grapple/3055-5/"
            }],
            "people": [{
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-79993/",
                "id": 79993,
                "name": "Crispin Freeman",
                "site_detail_url": "https://www.giantbomb.com/crispin-freeman/3040-79993/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-102388/",
                "id": 102388,
                "name": "Ashly Burch",
                "site_detail_url": "https://www.giantbomb.com/ashly-burch/3040-102388/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-18965/",
                "id": 18965,
                "name": "Mark Cerny",
                "site_detail_url": "https://www.giantbomb.com/mark-cerny/3040-18965/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/person/3040-63395/",
                "id": 63395,
                "name": "Hideo Kojima",
                "site_detail_url": "https://www.giantbomb.com/hideo-kojima/3040-63395/"
            }],
            "publishers": [{
                "api_detail_url": "https://www.giantbomb.com/api/publisher/3010-313/",
                "id": 313,
                "name": "Sony Interactive Entertainment America",
                "site_detail_url": "https://www.giantbomb.com/sony-interactive-entertainment-america/3010-313/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/publisher/3010-46/",
                "id": 46,
                "name": "Sony Interactive Entertainment Europe",
                "site_detail_url": "https://www.giantbomb.com/sony-interactive-entertainment-europe/3010-46/"
            }],
            "releases": [{
                "api_detail_url": "https://www.giantbomb.com/api/release/3050-142974/",
                "id": 142974,
                "name": "Horizon: Zero Dawn",
                "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/releases/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/release/3050-151556/",
                "id": 151556,
                "name": "Horizon: Zero Dawn (Collector's Edition)",
                "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/releases/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/release/3050-152839/",
                "id": 152839,
                "name": "Horizon: Zero Dawn",
                "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/releases/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/release/3050-152840/",
                "id": 152840,
                "name": "Horizon: Zero Dawn (Collector's Edition)",
                "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/releases/"
            }],
            "dlcs": [{
                "api_detail_url": "https://www.giantbomb.com/api/dlc/3020-6736/",
                "id": 6736,
                "name": "The Frozen Wilds",
                "site_detail_url": "https://www.giantbomb.com/horizon-zero-dawn/3030-49973/dlc/"
            }],
            "reviews": [{
                "api_detail_url": "https://www.giantbomb.com/api/review/1900-759/",
                "id": 759,
                "name": "Horizon: Zero Dawn Review",
                "site_detail_url": "https://www.giantbomb.com/reviews/horizon-zero-dawn-review/1900-759/"
            }],
            "similar_games": [{
                "api_detail_url": "https://www.giantbomb.com/api/game/3030-44484/",
                "id": 44484,
                "name": "Middle-earth: Shadow of Mordor",
                "site_detail_url": "https://www.giantbomb.com/middle-earth-shadow-of-mordor/3030-44484/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/game/3030-51102/",
                "id": 51102,
                "name": "Far Cry: Primal",
                "site_detail_url": "https://www.giantbomb.com/far-cry-primal/3030-51102/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/game/3030-41355/",
                "id": 41355,
                "name": "The Legend of Zelda: Breath of the Wild",
                "site_detail_url": "https://www.giantbomb.com/the-legend-of-zelda-breath-of-the-wild/3030-41355/"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/game/3030-27312/",
                "id": 27312,
                "name": "Tomb Raider",
                "site_detail_url": "https://www.giantbomb.com/tomb-raider/3030-27312/"
            }],
            "themes": [{
                "api_detail_url": "https://www.giantbomb.com/api/theme/3032-3/",
                "id": 3,
                "name": "Sci-Fi",
                "site_detail_url": "https://www.giantbomb.com/games/?wikiSlug=sci-fi&wikiTypeId=3032&wikiId=3&theme=3"
            }, {
                "api_detail_url": "https://www.giantbomb.com/api/theme/3032-18/",
                "id": 18,
                "name": "Post-Apocalyptic",
                "site_detail_url": "https://www.giantbomb.com/games/?wikiSlug=post-apocalyptic&wikiTypeId=3032&wikiId=18&theme=18"
            }]
        };
    }
})();