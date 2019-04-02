//Object构造函数，对象字面量都可以创建对象 ##缺点：使用同一个接口创建多个对象，会产生大量的重复代码。

//工厂模式
//解决了多个相似对象的问题；没有解决对象类型的识别问题。
function createObj(name, age, job) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;

    obj.sayName = function () {
        console.log(this.name);
    };

    return obj;
}

var person1 = createObj('liulu', 18, 'teacher');
var person2 = createObj('leeyowon', 28, 'actor');



