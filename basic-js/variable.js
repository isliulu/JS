/**
 * created by Administrator on 2019-3-18
 */

//ECMAScript的变量是松散型的，就是可以用来保存任何类型的数据。
//用var操作符定义的变量将成为定义该变量的作用域中的局部变量
//也就是说，如果在一个函数中使用var 定义一个变量，那么这个变量在函数退出后就被会销毁。

function test() {
    var message='hello';  //局部变量
}
test();

console.log(message);  //ReferenceError: message is not defined

// ------------------------------------------分割线
function test2() {
    message='hello';
}
test2();

console.log(message); //hello  省略了var  message成了全局变量；这种方法要避免！！！