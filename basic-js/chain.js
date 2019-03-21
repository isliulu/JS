/**
 * created by Administrator on 2019-3-21
 */

//prototype:每当创建一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，该属性指向函数的原型对象。
//constructor:指回原构造函数

//[[prototype]](__proto__)当调用构造函数创建一个新的实例后，
// 该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。
//[[prototype]]是从构造函数的prototype属性派生出来的，是对象实例与构造函数的原型对象之间的连接。

console.log(Function.__proto__);                      //[Function]
console.log(Function.__proto__.__proto__);            //{}
console.log(Function.__proto__.__proto__.__proto__);  //null
console.log(Function.__proto__===Function.prototype); //true

function Object() {

}



var obj1 = new Object();
console.log(obj1.__proto__ === Object.prototype); //true

function Foo() {

}

var foo1 = new Foo();
console.log(foo1.__proto__ === Foo.prototype); //true

console.log(Function instanceof Object);//false
console.log(Object instanceof Function);//true