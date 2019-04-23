//ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
// ES6 的模块自动采用严格模式，不管有没有在模块头部加上"use strict";


//模块功能主要由两个命令构成：export和import。
// export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

// 写法一
export var m = 1;

// 写法二
var mm = 1;
export {mm};

// 写法三
var n = 1;
export {n as x};  //使用as关键字，重命名

// 函数写法1
export function f1() {
}

// 函数写法2
function f() {
}

export {f};