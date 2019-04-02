//原型模式
//使用原型模式的好处是让所有对象实例共享它所包含的属性和方法。

//我们所创建的每个函数都有一个prototype属性，这个属性是一个指针，指向一个对象，
//而这个对象的用途是包含可以有特定类型的所有实例共享的属性和方法。

function Person() {

}
console.log(Person.prototype);  //Person {}

Person.prototype.name = 'liulu';
Person.prototype.age = 18;
Person.prototype.job = 'software engineer';
Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = new Person();
person1.sayName();   //liulu

var person2 = new Person();
person2.sayName();  //liulu

console.log(person1.sayName === person2.sayName);  //true