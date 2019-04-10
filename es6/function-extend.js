//函数的扩展

//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面

function foo(x = 1, y = 2) {
    console.log(x, y);
}

// foo();     //1 2
foo(3, 4);  //3 4

//rest参数 （形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中,rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

function fun(...val) {
    console.log(val);
}

fun(1, 2, 3);  //[1,2,3]


//name属性

console.log(fun.name);  //fun


//箭头函数

var f = v => v;  //等同于

var f1 = function (v) {
    return v;
};


// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

var fo = () => 5;  //等同于

var fo1 = function () {
    return5
};


//箭头函数有几个使用注意点。
//
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// //
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
//
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。


function foop() {
    // setTimeout(() => {
    //     console.log('id:', this.id);
    // }, 100);           //42

    // setTimeout(function () {
    //     console.log('id:', this.id);
    // },100)            //undefined
}

var id = 21;

foop.call({ id: 42 });