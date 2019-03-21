/**
 * created by Administrator on 2019-3-21
 */
// function createFun() {
//     var result = new Array();
//
//     for (var i = 0; i < 10; i++) {
//         result[i] = function () {
//             return i;
//         }
//     }
//     return result;
// }
//
// var a = createFun(5);
// console.log(a);
//
// //
// function createFun() {
//     var result = new Array();
//
//     for (var i = 0; i < 10; i++) {
//         result[i] = function (num) {
//             return function () {
//                 return num
//             };
//         }(i);
//     }
//     return result;
// }
//
// var b = createFun(5);
// console.log(b);


//MDN  词法作用域
//init() 创建了一个局部变量 name 和一个名为 displayName() 的函数。
// displayName() 是定义在 init() 里的内部函数，仅在该函数体内可用。
// displayName() 内没有自己的局部变量，然而它可以访问到外部函数的变量，
// 所以 displayName() 可以使用父函数 init() 中声明的变量 name 。
// 但是，如果有同名变量 name 在 displayName() 中被定义，则会使用 displayName() 中定义的 name 。

// function init() {
//     var name = "Mozilla"; // name 是一个被 init 创建的局部变量
//     function displayName() {
//         var name='liulu';      // displayName() 是内部函数,一个闭包
//         console.log(name);     // 使用了父函数中声明的变量
//     }
//     displayName();
// }
// init();


//运行这段代码和之前的 init() 示例的效果完全一样。其中的不同 —
// 也是有意思的地方 — 在于内部函数 displayName() 在执行前，被外部函数返回。
// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
//
// var myFunc = makeFunc();
// myFunc();


//
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


//
var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
})();

console.log(Counter.value());
Counter.increment();
Counter.increment();
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());

//
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        }
    }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
