/**
 * created by Administrator on 2018-11-26
 */

const fs = require('fs');


console.log('start');
// var data = fs.readFileSync('callback.txt');   //同步

fs.readFile('callback.txt',function (err,data) {    //异步  //一个方法的参数是一个函数的话，则这个函数就是回调函数（回调函数就参数的一种）
    if (err) return console.error(err);
    console.log(data.toString());
});


// console.log(data.toString());

console.log('end');