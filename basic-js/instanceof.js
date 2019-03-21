/**
 * created by Administrator on 2019-3-21
 */

function Person() {

}

var p1 = new Person();

Person.valueOf = function () {
    console.log('hello');
};

p1.valueOf();   //调用的是Object.prototype上的valueOf()

Person.prototype.name = 'may';
console.log(p1.name);

var p2 = new Person();
console.log(p2.name);

delete p1.name;
console.log(p1.name);


console.log(Person instanceof Object);//true
console.log(Person instanceof Function);//true