/**
 * created by Administrator on 2019-3-21
 */


//this-------它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。
// this就是函数运行时所在的环境对象。

//情况一：纯粹的函数调用,这是函数的最通常用法，属于全局性调用，因此this就代表全局对象
//非严格模式下可以
var a = 1;

function test() {
    console.log(this.a);  //undefined
}

test();


//情况二：作为对象方法的调用,函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

function test2() {
    console.log(this.a);
}

var obj = {};
obj.a = 2;
obj.b = test2;     //此时this指向obj对象

obj.b();


//情况三 作为构造函数调用，所谓构造函数，就是通过这个函数，可以生成一个新对象。这时，this就指这个新对象。
//非严格模式下可以

// function test3() {
//     this.a = 3;
// }
//
// var obj = new test3();
// obj.a

//情况四 apply 调用,apply()是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数。
var x = 0;
function test4() {
    console.log(this.x);
}

var obj = {};
obj.x = 4;
obj.m = test4;
obj.m.apply(obj) ;// 4