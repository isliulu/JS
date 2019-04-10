
var express= require('express');

var app = express();

// console.log(app);

app.get('/',function (req,res) {
    res.send('hello leeyowon');
});


var server = app.listen(8081,function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log( host, port);
});