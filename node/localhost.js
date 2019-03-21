/**
 * created by Administrator on 2018-11-26
 */

const http = require('http');

http.createServer(function (req, res) {
    // res.write('keep learning');

    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); //charset=utf-8解析中文
    res.end('李枖原');
}).listen(888);