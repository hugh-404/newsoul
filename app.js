var express = require('express');
var app = express();

app.use('/', express.static('resources/build'));
app.get('/newsoul/home', function (req, res) {
    res.sendFile(__dirname + '/resources/build/index.html');
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);

});