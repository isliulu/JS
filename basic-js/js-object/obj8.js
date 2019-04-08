//组合使用构造函数模式和原型模式
//构造函数模式定义实例属性
//原型模式定义方法和共享的属性

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ['uie', 'dami'];
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
};

var person1 = new Person('leeyowon', 18);

person1.friends.push('erin');

var person2 = new Person('liulu', 9);

console.log(person1.friends === person2.friends); //false

console.log(person1.sayName === person2.sayName); //true




