//组合继承，是指将原型链和借用构造函数的技术组合到一起
//思想：使用原型链实现对原型属性和方法的继承，而通过借用构造函数实现对实例属性的继承。
//常用的继承模式

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "orange"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {

    //继承属性
    SuperType.call(this, name);
    this.age = age;
}

//继承方法

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let instance = new SubType('liulu', 24);
instance.colors.push("black");

console.log(instance.colors);//[ 'red', 'blue', 'orange', 'black' ]

instance.sayName(); //liulu
instance.sayAge(); //24

let instance2 = new SubType('leeyowon',33);

console.log(instance2.colors);//[ 'red', 'blue', 'orange' ]

instance2.sayName(); //leeyowon
instance2.sayAge(); //33
