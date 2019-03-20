/**
 * created by Administrator on 2019-3-20
 */

//声明式函数：若同名，则后面的函数会覆盖前面的函数
var x = 0, y = 0, z = 0;

function add(n) {
    return n + 1;
}

x = add(1);//2

function add(n) {
    return n + 3;
}

y = add(3);//6
z = x + y; //10

console.log(y);
console.log(z);

console.log(typeof(undefined));//undefined
console.log(typeof(null));  //object
console.log(typeof('11'));  //string
console.log(typeof(11));  //number
console.log(typeof(true));  //boolean
console.log(typeof(function () {}));  //function


var obj = new Object();
Object.prototype.a = 1;


var b = {};
b.attr = 2;
console.log(b.a);
console.log(b.attr);