
var express = require('express');

var app = express();

app.get('/',function (req,res) {
    console.log('主页GET请求');
    res.send('hello GET');
});

app.post('/',function (req,res) {
    console.log('主页POST请求');
    res.send('HEllO POST');
});


app.get('/delete',function (req,res) {
    console.log('/delete响应delete请求');
    res.send('删除页面');
});

app.get('/list',function (req,res) {
    console.log('/list响应list请求');
    res.send('列表页面');
});

var server = app.listen(function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});