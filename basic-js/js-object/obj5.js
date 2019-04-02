//构造函数模式

//任何函数，只要通过new操作符来调用，那它就可以作为构造函数；如果不是通过new操作符来调用，那它就是普通函数。

//相比于工厂模式，构造函数  没有显示的创建对象； 没有return； 直接将属性和方法赋给了this对象。

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var person1 = new Person('liulu', 18, 'programmer');
var person2 = new Person('leeyowon', 28, 'actor');

//创建Person的新实例，必须使用new操作符。
//1=>创建一个新对象；
//2=>将构造函数的作用域赋给了新对象（因此this指向了这个新对象）；
//3=>执行构造函数中的代码（为这个新对象添加属性）
//4=>返回新对象

console.log(person1 instanceof Person);  //true
console.log(person1 instanceof Object);  //true
console.log(person2 instanceof Person);  //true
console.log(person2 instanceof Object);  //true

//调用方式

//当作构造函数使用
var person = new Person('liulu', 18, 'programmer');
person.sayName();   //liulu

//作为普通函数调用
Person('uie',28,'singer');
global.sayName();  //uie

//在另一个对象的作用域中调用
var o = new Object();
Person.call(o,'Jessica',26,'nurse');
o.sayName();







