/**
 * created by Administrator on 2019-10-9
 */

/**
 * node.js连接mySql
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'my_data_list'
});

connection.connect();

var sql = 'select * from student'; //查询表

connection.query(sql, function (error, results, fields) {
    if (error) {
        console.log('查询失败',error.message);
        return;
    }
    // console.log('The solution is: ', results[0].solution);
    console.log(results);
});

connection.end();