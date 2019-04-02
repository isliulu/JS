//理解原型对象

var a = function () {

};

console.log(a.prototype);  //a {}
console.log(a.prototype.constructor); //[Function: a]

var a1 = new a();
console.log(a1.__proto__); //a {}
console.log(a1 instanceof a);  //true
console.log(a.prototype.isPrototypeOf(a1));//true

console.log(Object.getPrototypeOf(a1));  //a {}
console.log(Object.getPrototypeOf(a1) === a.prototype);  //true
