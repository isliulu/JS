/**
 * created by Administrator on 2019-9-26
 */

//柯里化 -> 就是把一个多参数的函数，转化为单参数函数。

//柯里化之前
function add(x, y) {
    return x + y;
}

var num = add(1,2);
console.log(num); //3

//柯里化之后
function addX(y) {
    return function (x) {
        return x + y;
    }
}

var num1 = addX(2)(1);
console.log(num1); //3

var date = new Date().getUTCHours();
console.log(date);