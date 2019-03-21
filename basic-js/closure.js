/**
 * created by Administrator on 2019-3-21
 */

//闭包就是能够读取其他函数内部变量的函数。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

//闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中
/**
 * fun2可以读取fun1中的局部变量，那么只要把fun2作为返回值，我们不就可以在f1外部读取它的内部变量了
 */
function fun1() {
    var a = 666;

    function fun2() {
        console.log(a);
    }

    return fun2();  //就是一个闭包  666
}

fun1();

/**
 * 变量的值始终保持在内存中
 * @returns {f2}
 */
function f1() {

    var n = 999;

    nAdd = function () {
        n += 1
    };

    function f2() {
        console.log(n);
    }

    return f2;

}

var result = f1();

result(); // 999

nAdd();

result(); // 1000



//
var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            return this.name;   //undefined
        };
    }
};

console.log(object.getNameFunc()());

//
var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;  //My Object
        };

    }

};
console.log(object.getNameFunc()());