/**
 * created by Administrator on 2019-3-21
 */

//构造函数创建对象

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log('I love' + this.name + 'very much');
    }
}

var lee = new Person('leeyowon');
console.log(lee.name);
// lee.sayHello();

//工厂模式创建对象

function createObj(name) {
    var obj = {};
    obj.name = name;
    obj.sayHi = function () {
        console.log(this.name + 'is very nice');
    };
    return obj;
}

var yo = createObj('leeyowon');
console.log(yo.name);
yo.sayHi();

//原型模式

function Person(name) {
    Person.prototype.name = name;
    Person.prototype.sayYes = function () {
        console.log('I dreamed ' + this.name);
    }
}

var won = new Person('yowonlee');
console.log(won.name);
// won.sayYes();

//简化原型模式

function Person() {

}

Person.prototype = {
    constructor: Person,
    name: "leaderXu",
    sayYes: function () {
        console.log('I love ' + this.name);
    }
};

var leader = new Person();
console.log(leader.name);
leader.sayYes();

//原型和构造函数组合模式

function Person(name) {
    this.name=name;
    this.sayNo=function () {
        console.log('I can not '+this.name);
    }
}

Person.prototype={
    constructor:Person,
    name:'you',
    sayBye:function () {
        console.log('I can not forget '+this.name);
    }
};
var u=new Person('you');
console.log(u.name);
u.sayNo();
u.sayBye();
