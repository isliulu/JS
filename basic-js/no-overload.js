/**
 * created by Administrator on 2019-3-18
 */

//ECMAScript函数没有签名，因为其参数是由包含零或多个值的数组来表示的，没有函数签名，真正的重载是不可能做到的
//**后定义的函数会覆盖先定义的函数

function doSum() {
    console.log('我是第一个定义函数');
}

function doSum() {
    console.log('我是第二个定义的函数');
}

doSum();