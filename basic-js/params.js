/**
 * created by Administrator on 2019-3-18
 */

//参数
//ECMAScript中的所有参数传递的都是值，不可能通过引用传递参数
//arguments对象只是与数组相似（它并不是Array的实例）
//命名的参数只是提供便利，但不是必需的
//通过访问arguments对象的length属性可以获得由多少个参数传递给了这个函数
//没有传递值的命名函数将自动被赋予undefined值，相当于定义了变量没有初始化

function howManyArgs() {
    console.log(arguments.length);
}

howManyArgs();  //0
howManyArgs(1); //1
howManyArgs('liulu', 3);//2

//接收任意参数实现相应的功能

function doAdd() {
    if (arguments.length === 1) {
        console.log('参数是：' + arguments[0]);   //参数是：liulu

    } else if (arguments.length === 2) {
        console.log('参数是：' + arguments[0] + '和' + arguments[1]);  //参数是：leeyowon和uie
    }
}
doAdd('liulu');
doAdd('leeyowon','uie');