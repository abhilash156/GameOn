var app = require("../../express");

const https = require('https');

app.post("/api/redirectGB", redirectGB);
app.get("/api/testAPI", testAPI);
app.post("/api/redirectIG", redirectIG);

function redirectIG(request, response) {
    var body = request.body;
    if (body.requestType === "GET") {
        var url = body.requestURL;

        https.get({
            host: 'api-2445582011268.apicast.io',
            path: url,
            headers: {
                "user-key": "644bf010a916472643e762510a0ff32d",
                "Accept": "application/json"
            }
        }, function (apiResponse) {
            var resultBody = '';
            apiResponse.on('data', function (d) {
                resultBody += d;
            });
            apiResponse.on('end', function () {
                response.send(JSON.parse(resultBody));
            });
        })
    } else {
        response.sendStatus(400);
    }
}

function redirectGB(request, response) {
    var body = request.body;
    if (body.requestType === "GET") {
        var url = encodeURI(body.requestURL);

        https.get({
            host: 'www.giantbomb.com',
            path: url + "&api_key=afd6e6694de225fefbbd0ac7c3b9e92244b477f0&format=json",
            headers: {'user-agent': 'Mozilla/5.0'}
        }, function (apiResponse) {
            var resultBody = '';
            apiResponse.on('data', function (d) {
                resultBody += d;
            });
            apiResponse.on('end', function () {
                response.send(resultBody);
            });
        })
    } else {
        response.sendStatus(400);
    }
}

function testAPI(request, response) {
    //var url = encodeURI(body.requestURL);
    //https://www.giantbomb.com/api/game/3030-49973/?api_key=afd6e6694de225fefbbd0ac7c3b9e92244b477f0&format=json
    https.get({
        host: 'www.giantbomb.com',
        path: "/api/game/3030-49973/?api_key=afd6e6694de225fefbbd0ac7c3b9e92244b477f0&format=json",
        headers: {'user-agent': 'Mozilla/5.0'}
    }, function (apiResponse) {
        var resultBody = '';
        apiResponse.on('data', function (d) {
            resultBody += d;
        });
        apiResponse.on('end', function () {
            response.send(resultBody);
        });
    })
}