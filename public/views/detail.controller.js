(function () {
    angular.module("GameOn")
        .controller("detailController", detailController);

    function detailController($http) {
        var model = this;
        var API_KEY_GIANT_BOMB = "afd6e6694de225fefbbd0ac7c3b9e92244b477f0";
        var API_KEY_IGDB = "644bf010a916472643e762510a0ff32d";
        var api_configurations = {"user-key": "644bf010a916472643e762510a0ff32d", "Accept": "application/json"};

        model.searchGamesIG = searchGamesIG;
        model.searchGamesGB = searchGamesGB;
        model.getImageUrl = getImageUrl;

        function init() {
            model.game = {
                "title": "Dota 2",
                "description": "Harshit plays this!",
                "url": "http://pre02.deviantart.net/0c7e/th/pre/i/2011/028/5/4/dota_2_poster_by_jmc5221-d387ukq.jpg"
            };
        }

        init();

        function searchGamesGB(searchQuery) {
            var url = "/api/redirectGB";
            var body = {
                "requestType": "GET",
                "requestURL": "/api/search/?query=\"" + searchQuery + "\"&resources=game"
            };
            $http.post(url, body)
                .then(function (response) {
                    model.searchResult = response.data;
                })
        }

        function searchGamesIG(searchQuery) {
            var url = "/api/redirectIG";
            var body = {
                "requestType": "GET",
                "requestURL": "/games/?search=\"" + searchQuery + "\"&fields=cover,name,developers"
            };
            $http.post(url, body)
                .then(function (response) {
                    model.searchResult = response.data;
                })
        }

        function getImageUrl(imageId) {
            return "http://images.igdb.com/igdb/image/upload/t_cover_big_2x/" + imageId;
        }

        //searchGamesIG("Horizon");

        model.searchResult = [{
            "id": 11156,
            "name": "Horizon: Zero Dawn",
            "developers": [1843],
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/yvgbtirrauwekgytcfmg.jpg",
                "cloudinary_id": "yvgbtirrauwekgytcfmg",
                "width": 1043,
                "height": 1298
            }
        }, {
            "id": 37083,
            "name": "Horizon: Zero Dawn - The Frozen Wild",
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/us0j4fopqvfdhhzefgvc.jpg",
                "cloudinary_id": "us0j4fopqvfdhhzefgvc",
                "width": 626,
                "height": 704
            }
        }, {
            "id": 10734,
            "name": "Horizon Chase",
            "developers": [6067],
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/ygze4iwocic9i6wvnosd.jpg",
                "cloudinary_id": "ygze4iwocic9i6wvnosd",
                "width": 1598,
                "height": 845
            }
        }, {
            "id": 19539,
            "name": "Forza Horizon 3",
            "developers": [1432],
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/olxhsw4djfakodpuedut.jpg",
                "cloudinary_id": "olxhsw4djfakodpuedut",
                "width": 272,
                "height": 380
            }
        }, {"id": 28542, "name": "Forza Horizon 3: Hot Wheels"}, {
            "id": 20307,
            "name": "Forza Horizon 2: Storm Island"
        }, {"id": 41609, "name": "Forza Horizon 3: Ultimate"}, {
            "id": 26495,
            "name": "Forza Horizon 3: Blizzard Mountain"
        }, {
            "id": 7326,
            "name": "Forza Horizon 2",
            "developers": [439, 1432],
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/m4g5ia3bfmdeglgzvjlm.jpg",
                "cloudinary_id": "m4g5ia3bfmdeglgzvjlm",
                "width": 410,
                "height": 490
            }
        }, {
            "id": 41594,
            "name": "Forza Horizon Limited Collector's Edition",
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/nity3bgxk7thpitasdov.jpg",
                "cloudinary_id": "nity3bgxk7thpitasdov",
                "width": 829,
                "height": 1161
            }
        }];


        model.searchResultGB = {
            "error": "OK",
            "limit": 10,
            "offset": 0,
            "number_of_page_results": 10,
            "number_of_total_results": 38,
            "status_code": 1,
            "results": [
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-43493/",
                    "date_added": "2013-08-12 03:58:08",
                    "date_last_updated": "2016-09-22 12:39:36",
                    "deck": "A turn based strategy game for PC.",
                    "description": "<h2> System Requirements</h2><h3>Minimum</h3><ul><li><strong>OS:</strong> Windows XP SP3</li><li><strong>Processor:</strong> Intel Core 2 Duo 1.8 GHz or AMD Athlon X2 64 2.0 GHz</li><li><strong>Memory:</strong> 2 GB RAM</li><li><strong>Graphics:</strong> 512 MB Video Card w/Pixel Shader 3.0 Support</li><li><strong>DirectX®:</strong> 9.0c</li><li><strong>Hard Drive:</strong> 2 GB HD space</li><li><strong>Sound:</strong> DirectX 9.0c-compatible</li></ul><h3>Recommended</h3><p><strong>OS:</strong> Windows 7</p><ul><li><strong>Processor:</strong> Intel Core i3/i5/i7 or AMD equivalent</li><li><strong>Memory:</strong> 4 GB RAM</li><li><strong>Graphics:</strong> 1 GB ATI 4800 series or better, 1 GB NVIDIA 9800 or better</li><li><strong>DirectX®:</strong> 9.0c</li><li><strong>Hard Drive:</strong> 2 GB HD space</li><li><strong>Sound:</strong> DirectX 9.0c-compatible</li></ul>",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 43493,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2528172-horizon_new_full_logo.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2528172-horizon_new_full_logo.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2528172-horizon_new_full_logo.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2528172-horizon_new_full_logo.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2528172-horizon_new_full_logo.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2528172-horizon_new_full_logo.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2528172-horizon_new_full_logo.jpg"
                    },
                    "name": "Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2013-07-02 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-94/",
                            "id": 94,
                            "name": "PC",
                            "site_detail_url": "https://www.giantbomb.com/pc/3045-94/",
                            "abbreviation": "PC"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/horizon/3030-43493/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-43677/",
                    "date_added": "2013-08-23 08:32:30",
                    "date_last_updated": "2014-11-30 10:18:21",
                    "deck": "RTS/tower defense hybrid where the player defends against hordes of robotic insects.",
                    "description": null,
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 43677,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2533981-6031475209-95139.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2533981-6031475209-95139.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2533981-6031475209-95139.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2533981-6031475209-95139.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2533981-6031475209-95139.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2533981-6031475209-95139.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2533981-6031475209-95139.jpg"
                    },
                    "name": "Final Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2014-12-02 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-143/",
                            "id": 143,
                            "name": "PlayStation Network (Vita)",
                            "site_detail_url": "https://www.giantbomb.com/playstation-network-vita/3045-143/",
                            "abbreviation": "PSNV"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-146/",
                            "id": 146,
                            "name": "PlayStation 4",
                            "site_detail_url": "https://www.giantbomb.com/playstation-4/3045-146/",
                            "abbreviation": "PS4"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/final-horizon/3030-43677/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-22979/",
                    "date_added": "2008-08-05 06:04:40",
                    "date_last_updated": "2014-08-03 12:02:17",
                    "deck": "Dark Horizon is a space combat simulator develped by Quazar Studio for the PC. \n\nDark Horizon is the sequel to Tarr Chronicles.",
                    "description": "<h2>Overview</h2>Dark Horizon is a space combat simulator which shares characteristics with games such as the original X-Wing VS TIE Fighter and Darklight Conflict. In its 22 levels the game features RPG elements geared toward ship customization as well as the ability to craft original weapons and equipment. Finally and most importantly the game features full joystick support.",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 22979,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2331096-box_dhorizon.png",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2331096-box_dhorizon.png",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2331096-box_dhorizon.png",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2331096-box_dhorizon.png",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2331096-box_dhorizon.png",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2331096-box_dhorizon.png",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2331096-box_dhorizon.png"
                    },
                    "name": "Dark Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2008-09-23 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-94/",
                            "id": 94,
                            "name": "PC",
                            "site_detail_url": "https://www.giantbomb.com/pc/3045-94/",
                            "abbreviation": "PC"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/dark-horizon/3030-22979/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-31207/",
                    "date_added": "2010-05-07 11:40:29",
                    "date_last_updated": "2010-05-16 10:08:23",
                    "deck": "Murky Horizon is a hybrid dual-stick shooter and tower defense game that is currently download-able on the Xbox 360 under the Xbox Live Indie Games service. In it you can team up with up to 3 of your friends and defend your families' underground home from waves of flesh-eating lizards.",
                    "description": "<br/> <p>Murky Horizon is a hybrid dual-stick shooter and tower defense game that is currently download-able on the Xbox 360 under the Xbox Live Indie Games service.  In it you can team up with up to 3 of your friends and defend your families' underground home from waves of flesh-eating lizards. You're outnumbered badly, but some well placed defenses and a steady aim may get you through the night. It features:</p> <ul class=\"plain-list\"><li> A unique fusion of action and strategy. <br/></li><li> Dynamic lighting - Nightfall isn't just an aesthetic change, the dynamics of the game change too.</li><li> 40 rounds</li><li> 4 skill levels</li><li> 8 power-ups to temporarily boost your player.<br/></li><li> 3 upgradeable turret types</li><li> 2 very different game-modes</li><li> 80ms points for the full version (about $1 U.S.)</li></ul> <br/>There is a contest giving away free copies of the game, running until June 20, 2010 on the developers game at http://www.hamstudios.com<br/>    <figure data-align=\"left\" data-embed-type=\"image\" data-img-src=\"https://static.giantbomb.com/uploads/original/9/93899/1364679-murkyhorizon3.jpg\" data-ref-id=\"1300-1364679\" data-size=\"medium\" data-ratio=\"0.5625\"><a class=\"fluid-height\" style=\"padding-bottom:56.3%\" href=\"https://static.giantbomb.com/uploads/original/9/93899/1364679-murkyhorizon3.jpg\" data-ref-id=\"1300-1364679\"><img alt=\"No Caption Provided\" src=\"https://static.giantbomb.com/uploads/scale_medium/9/93899/1364679-murkyhorizon3.jpg\" srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364679-murkyhorizon3.jpg 1280w, https://static.giantbomb.com/uploads/scale_super/9/93899/1364679-murkyhorizon3.jpg 960w, https://static.giantbomb.com/uploads/scale_medium/9/93899/1364679-murkyhorizon3.jpg 480w\" sizes=\"(max-width: 480px) 100vw, 480px\" data-width=\"480\"></a></figure> <br/><figure data-align=\"left\" data-embed-type=\"image\" data-img-src=\"https://static.giantbomb.com/uploads/original/9/93899/1364678-murkyhorizon2.jpg\" data-ref-id=\"1300-1364678\" data-size=\"medium\" data-ratio=\"0.5625\"><a class=\"fluid-height\" style=\"padding-bottom:56.3%\" href=\"https://static.giantbomb.com/uploads/original/9/93899/1364678-murkyhorizon2.jpg\" data-ref-id=\"1300-1364678\"><img alt=\"No Caption Provided\" src=\"https://static.giantbomb.com/uploads/scale_medium/9/93899/1364678-murkyhorizon2.jpg\" srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364678-murkyhorizon2.jpg 1280w, https://static.giantbomb.com/uploads/scale_super/9/93899/1364678-murkyhorizon2.jpg 960w, https://static.giantbomb.com/uploads/scale_medium/9/93899/1364678-murkyhorizon2.jpg 480w\" sizes=\"(max-width: 480px) 100vw, 480px\" data-width=\"480\"></a></figure> <br/><figure data-align=\"left\" data-embed-type=\"image\" data-img-src=\"https://static.giantbomb.com/uploads/original/9/93899/1364676-murkyhorizon4.jpg\" data-ref-id=\"1300-1364676\" data-size=\"medium\" data-ratio=\"0.5625\"><a class=\"fluid-height\" style=\"padding-bottom:56.3%\" href=\"https://static.giantbomb.com/uploads/original/9/93899/1364676-murkyhorizon4.jpg\" data-ref-id=\"1300-1364676\"><img alt=\"No Caption Provided\" src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\" sizes=\"(max-width: 480px) 100vw, 480px\" data-width=\"480\" class=\"js-lazy-load-image\" data-src=\"https://static.giantbomb.com/uploads/scale_medium/9/93899/1364676-murkyhorizon4.jpg\" data-srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364676-murkyhorizon4.jpg 1280w, https://static.giantbomb.com/uploads/scale_super/9/93899/1364676-murkyhorizon4.jpg 960w, https://static.giantbomb.com/uploads/scale_medium/9/93899/1364676-murkyhorizon4.jpg 480w\"><noscript><img alt=\"No Caption Provided\" src=\"https://static.giantbomb.com/uploads/scale_medium/9/93899/1364676-murkyhorizon4.jpg\" srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364676-murkyhorizon4.jpg 1280w, https://static.giantbomb.com/uploads/scale_super/9/93899/1364676-murkyhorizon4.jpg 960w, https://static.giantbomb.com/uploads/scale_medium/9/93899/1364676-murkyhorizon4.jpg 480w\" sizes=\"(max-width: 480px) 100vw, 480px\" data-width=\"480\"></noscript></a></figure> <br/><figure data-align=\"left\" data-embed-type=\"image\" data-img-src=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg\" data-ref-id=\"1300-1364677\" data-size=\"medium\" data-ratio=\"0\"><a  href=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg\" data-ref-id=\"1300-1364677\"><img alt=\"No Caption Provided\" src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\" sizes=\"(max-width: 0px) 100vw, 0px\" data-width=\"0\" class=\"js-lazy-load-image\" data-src=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg\" data-srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg 0w\"><noscript><img alt=\"No Caption Provided\" src=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg\" srcset=\"https://static.giantbomb.com/uploads/original/9/93899/1364677-murkyhorizon1.jpg 0w\" sizes=\"(max-width: 0px) 100vw, 0px\" data-width=\"0\"></noscript></a></figure>",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 31207,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/1364677-murkyhorizon1.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/1364677-murkyhorizon1.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/1364677-murkyhorizon1.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/1364677-murkyhorizon1.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/1364677-murkyhorizon1.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/1364677-murkyhorizon1.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/1364677-murkyhorizon1.jpg"
                    },
                    "name": "Murky Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": null,
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-86/",
                            "id": 86,
                            "name": "Xbox 360 Games Store",
                            "site_detail_url": "https://www.giantbomb.com/xbox-360-games-store/3045-86/",
                            "abbreviation": "XBGS"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/murky-horizon/3030-31207/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-29490/",
                    "date_added": "2009-12-18 12:55:28",
                    "date_last_updated": "2011-06-05 00:17:48",
                    "deck": "Fenton Paddock, a disgraced former British solider turned smuggler, must stop the Nazis from finding the mystical Shambhala.",
                    "description": "<h2>Overview<br/></h2><i>Lost Horizon</i> is a <a data-ref-id=\"3015-75\" href=\"/point-and-click/3015-75/\" slug=\"point-and-click\">                        point and click</a> adventure game developed by German studio <a data-ref-id=\"3010-5892\" href=\"/animation-arts-creative-gmbh/3010-5892/\" slug=\"animation-arts-creative-gmbh\">                      Animation Arts</a> featuring hand-drawn backgrounds with 3D character models and a fast-paced story.  The story is heavily influenced by the Indiana Jones movies and pulp serials, and the game provides interactive action sequences to provide a sense of excitement, even though there is no way to die.<br/><h2>Story<br/></h2>Set in 1936 Hong Kong, disgraced former British soldier Fenton Paddock is your typical pulp hero - a rugged but charming smuggler who is in trouble with the local triads.  Paddock is recruited by the British governor of Hong Kong, Lord Weston, to find his son and friend of Paddock's who has gone missing as part of an cartography expedition to the uncharted Himalayas.  Paddock is accompanied by the requisite love interest Kim, who is unwittingly dragged into the entire affair by Paddock.  Soon enough the Nazis get involved, who are looking for the fabled city of <a href=\"../../shambhala/95-2601/\" rel=\"nofollow\"> </a><a data-ref-id=\"3035-2601\" href=\"/shambhala/3035-2601/\" slug=\"shambhala\">Shambhala</a>   and the world conquering power it is said to have, and Paddock must travel the world to stop them. <br/><h2>Gameplay<br/></h2>A traditional <a data-ref-id=\"3015-75\" href=\"/point-and-click/3015-75/\" slug=\"point-and-click\">   point and click</a> adventure game, Lost Horizon features high resolution, hand-drawn backgrounds and 3D character models.  The puzzles are straight forward and the inventory never gets too full, allowing easy experimentation if stuck.  Anytime in the game you can press the spacebar to see all hot spots highlighted, negating any pixel hunting in the high resolution backgrounds. <br/> <br/>The game also features several sequences where you control two characters who must work together but are in different areas. You can switch between them at any time and can exchange inventory items.<br/><br/>To provide the sense of danger that pulp serials often had, there are several \"action\" sequences.  They are not timed nor can you die in them - you solve puzzles during action set-pieces such as a car chase. <br/><h2>System Requirements</h2><b>Minimum: </b><br/><ul class=\"plain-list\"><li>OS: Windows XP / Vista / Windows 7</li><li>Processor: Intel Pentium 4 @ 2.0GHz / AMD Athlon XP 2000+</li><li>Memory: 512MB of RAM</li><li>Hard Disk Space: 4GB</li><li>Graphics Card: 64MB nVidia GeForce FX 5600 / ATI Radeon 9600</li><li>Sound Card: DirectX compatible</li><li>DirectX: 9.0c</li></ul><b>Recommended: </b><br/><ul class=\"plain-list\"><li>Processor: Intel Pentium 4 @ 3.0GHz / AMD Athlon 64 3200+</li><li>Memory: 1GB of RAM</li><li>Graphics Card: 128MB nVidia GeForce 6600 / ATI Radeon x1300</li></ul>",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 29490,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/1656804-lost_horizon_blank.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/1656804-lost_horizon_blank.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/1656804-lost_horizon_blank.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/1656804-lost_horizon_blank.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/1656804-lost_horizon_blank.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/1656804-lost_horizon_blank.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/1656804-lost_horizon_blank.jpg"
                    },
                    "name": "Lost Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2010-09-24 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-94/",
                            "id": 94,
                            "name": "PC",
                            "site_detail_url": "https://www.giantbomb.com/pc/3045-94/",
                            "abbreviation": "PC"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/lost-horizon/3030-29490/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-47283/",
                    "date_added": "2014-08-04 00:13:37",
                    "date_last_updated": "2017-01-18 10:27:48",
                    "deck": "Star Horizon is a sci-fi shooter game for mobile platforms.",
                    "description": null,
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 47283,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2666316-yrdfszek-bqhlbeya1abmcmhlvx_qc56hwl_kz4mdbck20vzeuxr4mrwq5ykkjapgpk=h900-rw.png"
                    },
                    "name": "Star Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2014-03-20 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-94/",
                            "id": 94,
                            "name": "PC",
                            "site_detail_url": "https://www.giantbomb.com/pc/3045-94/",
                            "abbreviation": "PC"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-96/",
                            "id": 96,
                            "name": "iPhone",
                            "site_detail_url": "https://www.giantbomb.com/iphone/3045-96/",
                            "abbreviation": "IPHN"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-121/",
                            "id": 121,
                            "name": "iPad",
                            "site_detail_url": "https://www.giantbomb.com/ipad/3045-121/",
                            "abbreviation": "IPAD"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-123/",
                            "id": 123,
                            "name": "Android",
                            "site_detail_url": "https://www.giantbomb.com/android/3045-123/",
                            "abbreviation": "ANDR"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-164/",
                            "id": 164,
                            "name": "Fuze Tomahawk F1",
                            "site_detail_url": "https://www.giantbomb.com/fuze-tomahawk-f1/3045-164/",
                            "abbreviation": "TF1"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/star-horizon/3030-47283/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-51085/",
                    "date_added": "2015-10-02 19:25:25",
                    "date_last_updated": "2015-10-04 22:18:40",
                    "deck": "A racing game for iOS and Android.  Inspired by Outrun and Top Gear.",
                    "description": null,
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 51085,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2787514-5016027420-tumbl.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2787514-5016027420-tumbl.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2787514-5016027420-tumbl.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2787514-5016027420-tumbl.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2787514-5016027420-tumbl.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2787514-5016027420-tumbl.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2787514-5016027420-tumbl.jpg"
                    },
                    "name": "Horizon Chase",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2015-08-20 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-96/",
                            "id": 96,
                            "name": "iPhone",
                            "site_detail_url": "https://www.giantbomb.com/iphone/3045-96/",
                            "abbreviation": "IPHN"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-121/",
                            "id": 121,
                            "name": "iPad",
                            "site_detail_url": "https://www.giantbomb.com/ipad/3045-121/",
                            "abbreviation": "IPAD"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-123/",
                            "id": 123,
                            "name": "Android",
                            "site_detail_url": "https://www.giantbomb.com/android/3045-123/",
                            "abbreviation": "ANDR"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/horizon-chase/3030-51085/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-23436/",
                    "date_added": "2008-08-19 11:56:01",
                    "date_last_updated": "2012-07-03 13:12:13",
                    "deck": "Shattered Horizon is an online multiplayer first-person shooter by Futuremark Games Studio that makes heavy use of zero gravity environments.",
                    "description": "<h2>Overview</h2><p>In Shattered Horizon, <a data-ref-id=\"3010-6444\" href=\"/futuremark-games-studio/3010-6444/\" slug=\"futuremark-games-studio\">Futuremark</a> Games Studios' first self-published game, battles take place in zero gravity environments such as hollowed-out asteroids, fragments of moon rock, and the ruined remains of the International Space Station. Players fight in first-person and have the ability to freely maneuver through space by means of a rocket pack.</p><p>A portion of the music for the game is provided by Captain. the keyboardist and producer of the Finnish band Poets of the Fall who previously performed the theme song 'Late Goodbye' for Max Payne 2.</p><ul><li>Supports up to 32 players.</li><li>Requires a DirectX 10 video card running under Windows Vista or 7.</li></ul><h2>DLC</h2><p>On February 16, 2010 Futuremark Games Studio released Moonrise, the first content pack for Shattered Horizon. Moonrise added four new levels to Shattered Horizon and is free for all players.</p><h2>System Requirements</h2><p><b>Minimum</b></p><ul><li><b>OS:</b> Windows Vista/7 (Does not support Windows XP)</li><li><b>Processor:</b> Intel Core 2 Duo E6600 / AMD Athlon64 X2 5600</li><li><b>Memory:</b> 2GB</li><li><b>Graphics:</b> 256MB NVIDIA GeForce 8800GT / ATI Radeon HD 3870</li><li><b>DirectX:</b> 10 (Does not support DirectX 9)</li><li><b>Hard Drive:</b> 1.5 GB</li><li><b>Sound:</b> Windows Vista compatible sound card</li></ul><p><b>Recommended</b></p><ul><li><b>OS:</b> Windows Vista/7 (Does not support Windows XP)</li><li><b>Processor:</b> Intel Core 2 Quad Q6600 / AMD Phenom II X4 940</li><li><b>Memory:</b> 2GB</li><li><b>Graphics:</b> 512MB NVIDIA GeForce GTX 260 / ATI Radeon HD 4870</li><li><b>DirectX:</b> 10 (Does not support DirectX 9)</li><li><b>Hard Drive:</b> 1.5GB</li><li><b>Sound:</b> Windows Vista compatible sound card</li></ul>",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 23436,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/1180057-shattered_horizon_keyart.jpg",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/1180057-shattered_horizon_keyart.jpg",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/1180057-shattered_horizon_keyart.jpg",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/1180057-shattered_horizon_keyart.jpg",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/1180057-shattered_horizon_keyart.jpg",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/1180057-shattered_horizon_keyart.jpg",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/1180057-shattered_horizon_keyart.jpg"
                    },
                    "name": "Shattered Horizon",
                    "number_of_user_reviews": 4,
                    "original_game_rating": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/game_rating/3065-1/",
                            "id": 1,
                            "name": "ESRB: T"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/game_rating/3065-2/",
                            "id": 2,
                            "name": "PEGI: 16+"
                        }
                    ],
                    "original_release_date": "2009-11-04 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-94/",
                            "id": 94,
                            "name": "PC",
                            "site_detail_url": "https://www.giantbomb.com/pc/3045-94/",
                            "abbreviation": "PC"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/shattered-horizon/3030-23436/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-21814/",
                    "date_added": "2008-07-28 13:19:19",
                    "date_last_updated": "2013-08-04 15:11:23",
                    "deck": "Alternate history WW2 action/strategy game released for the Sony PSP and Nintendo DS.",
                    "description": "<p>Steel Horizon is an alternate WW2 strategy game, published by Konami America and developed by Climax Groups' now-defunct LA studio.<br/><br/>Steel Horizon tells the lost tale of a naval Captain during World War II and his fight against the Nazis, the Japanese and the nefarious Babel Syndicate, a shadowy organization attempting to manipulate the war's outcome behind the scenes. Inspired by pulp novels, the Babel Syndicate has access to a variety of \"super science\" weapons, all fueled by a mysterious element known to the Nazis as \"Neoteutonium.\"<br/><br/>After selecting one of three possible flagships to command (battleship, carrier or submarine), the player embarks on the 25-mission campaign. Gameplay is a turn-based affair, in which the player builds units and tactically deploys them to accomplish their various objectives. Unlike most games in the genre, multiple ships can be grouped into a single \"square\" of the map. Battles, however, are resolved via real-time skirmishes involving multiple ships.<br/><br/></p>",
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 21814,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2525251-box_shorizon.png",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2525251-box_shorizon.png",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2525251-box_shorizon.png",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2525251-box_shorizon.png",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2525251-box_shorizon.png",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2525251-box_shorizon.png",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2525251-box_shorizon.png"
                    },
                    "name": "Steel Horizon",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": "2007-03-20 00:00:00",
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-18/",
                            "id": 18,
                            "name": "PlayStation Portable",
                            "site_detail_url": "https://www.giantbomb.com/playstation-portable/3045-18/",
                            "abbreviation": "PSP"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-52/",
                            "id": 52,
                            "name": "Nintendo DS",
                            "site_detail_url": "https://www.giantbomb.com/nintendo-ds/3045-52/",
                            "abbreviation": "DS"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/steel-horizon/3030-21814/",
                    "resource_type": "game"
                },
                {
                    "aliases": null,
                    "api_detail_url": "https://www.giantbomb.com/api/game/3030-45861/",
                    "date_added": "2014-03-31 15:47:08",
                    "date_last_updated": "2014-03-31 15:53:05",
                    "deck": "Alteil: Horizons is a Kickstarter-funded, collectible card game playable across several different platforms.",
                    "description": null,
                    "expected_release_day": null,
                    "expected_release_month": null,
                    "expected_release_quarter": null,
                    "expected_release_year": null,
                    "id": 45861,
                    "image": {
                        "icon_url": "https://www.giantbomb.com/api/image/square_avatar/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "medium_url": "https://www.giantbomb.com/api/image/scale_medium/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "screen_url": "https://www.giantbomb.com/api/image/screen_medium/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "small_url": "https://www.giantbomb.com/api/image/scale_small/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "super_url": "https://www.giantbomb.com/api/image/scale_large/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "thumb_url": "https://www.giantbomb.com/api/image/scale_avatar/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png",
                        "tiny_url": "https://www.giantbomb.com/api/image/square_mini/2615225-screen%20shot%202014-03-31%20at%206.46.25%20pm.png"
                    },
                    "name": "Alteil: Horizons",
                    "number_of_user_reviews": 0,
                    "original_game_rating": null,
                    "original_release_date": null,
                    "platforms": [
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-96/",
                            "id": 96,
                            "name": "iPhone",
                            "site_detail_url": "https://www.giantbomb.com/iphone/3045-96/",
                            "abbreviation": "IPHN"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-121/",
                            "id": 121,
                            "name": "iPad",
                            "site_detail_url": "https://www.giantbomb.com/ipad/3045-121/",
                            "abbreviation": "IPAD"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-123/",
                            "id": 123,
                            "name": "Android",
                            "site_detail_url": "https://www.giantbomb.com/android/3045-123/",
                            "abbreviation": "ANDR"
                        },
                        {
                            "api_detail_url": "https://www.giantbomb.com/api/platform/3045-140/",
                            "id": 140,
                            "name": "Browser",
                            "site_detail_url": "https://www.giantbomb.com/browser/3045-140/",
                            "abbreviation": "BROW"
                        }
                    ],
                    "site_detail_url": "https://www.giantbomb.com/alteil-horizons/3030-45861/",
                    "resource_type": "game"
                }
            ],
            "version": "1.0"
        }
    }
})();