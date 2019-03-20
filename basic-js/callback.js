/**
 * created by Administrator on 2019-3-20
 */

//回调函数是一个被作为参数传递给另一个函数（otherFunction）的函数
// 回调函数在otherFunction中被调用


function say (value) {
    console.log(value);
}

function otherFunction (someFunction, value) {
    someFunction(value);
}
//将回调函数的参数作为与回调函数同等级的参数进行传递
otherFunction(say, 'hello js.'); //这里的第二个参数就是say方法所需要的函数。


//回调函数的参数在调用回调函数内部构建
function sayHi (value) {
    console.log(value.name);
}

function executed (someFunction) {
    var value={
       name:'leeyowon hi'
    };
    someFunction(value);
}
executed(sayHi);