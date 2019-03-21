/**
 * created by Administrator on 2019-3-21
 */

//创建对象

//工厂模式  ----虽然解决了创建多个相似对象的问题，但是没有解决对象识别的问题（即怎么样知道一个对象的类型）

// function createPerson(name, age, job) {  //形参
//     var obj = new Object();  //创建一个对象
//     obj.name = name;          //实例化属性
//     obj.age = age;
//     obj.job = job;
//     obj.sayName = function () {   //实例化方法
//         console.log(this.name);
//     };
//     return obj;
// }
//
// var person1 = createPerson('leeyowon', 37, 'actor'); //实参
// var person2 = createPerson('meiqi', 17, 'singer');
//
// console.log(person1.sayName);
// console.log(person2.sayName);


//构造函数模式   ----与工厂模式相比：没有显示的创建对象；直接将属性和方法赋值给了this对象；没有return语句

/**
 * 要创建Person的新实例，必须使用new操作符。
 * 创建一个新对象；
 * 将构造函数的作用域赋值给新对象（因此this就指向了这个新对象）
 * 执行构造函数中的代码
 * 返回新对象
 * @param name
 * @param age
 * @param job
 * @constructor
 */

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function () {
//         console.log(this.name);
//     };
// }
//
// var person3 = new Person('leeyowon', 37, 'actor');
// var person4 = new Person('meiqi', 17, 'singer');
//
// console.log(person3.sayName);
// console.log(person4.sayName);

//原型模式 ---

//理解原型对象----只要创建了一个新的函数，则会根据规则为该函数创建一个prototype属性，这个属性指向原型对象。

//默认情况下，所有的原型对象都会自动获取一个constructor属性（构造函数属性），这个属性包含一个指向prototype的指针。

//Person.prototype.constructor指向Person.通过这个构造函数，还可以继续为原型对象添加其他的属性和方法。

//Object.getPrototypeOf();返回的对象实际上就是这个对象的原型。

//虽然可以通过对象实例访问保存再原型中的值，但是不能通过对对象实例重写原型中的值。

//hasOwnProperty();可以检测一个属性是存在于原型中，还是实例中。这个方法是从Object继承来的，只在给定属性存在于对象实例中，才会返回true;

// hasOwnProperty();可以检测属性是存在于实例中还是原型中。


// function Person() {
//         Person.prototype.name = 'leeyowon',
//         Person.prototype.age = '18',
//         Person.prototype.job = 'actor',
//         Person.prototype.sayName = function () {
//             console.log(this.name);
//         };
// }
//
// var person5 = new Person();
// person5.sayName();

//构造函数与原型模式组合使用
//构造函数用于定义实例属性，原型模式用于定义方法和共享的属性

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friend = ['lili',
        'couert'];
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
};

var person9 = new Person('leeyowon', 37, 'actor');
var person10 = new Person('meiqi', 17, 'singer');

person9.friend.push('lover');
console.log(person9.friend);
console.log(person10.friend);
console.log(person9.friend===person10.friend);  //false
console.log(person9.sayName===person10.sayName); //true

//实例属性是
// 在constructor中定义的，而所有的实例共享的属性constructor和方法sayName()则是在原型中定义的。
