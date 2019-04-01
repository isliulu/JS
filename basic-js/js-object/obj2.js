//传递参数
//js中所有函数的参数都是按值传递的

function addTen(num) {
    num += 10;
    return num;
}

var a;
var sym = Symbol();
var array = [1, 2];
var count = 20;
var result = addTen(count);

console.log(count);   //20
console.log(result);  //30


function setName(obj) {
    obj.name = 'leeyowon';
}

var person = new Object();

setName(person);

console.log(person.name);  //leeyowon

//typeof操作符
console.log(typeof setName);  //function
console.log(typeof person);   //object
console.log(typeof null);    //object
console.log(typeof array);    //object
console.log(typeof count);   //number
console.log(typeof a);     //undefined
console.log(typeof sym);  //symbol
console.log(typeof true);  //boolean



