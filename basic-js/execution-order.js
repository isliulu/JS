/**
 * created by Administrator on 2019-3-20
 */

//执行顺序不同,两个异步队列不一样，promise所在的异步队列优先级要高一点。
// 即setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
// Promise.then()在本轮“事件循环”结束时执行。因此then 函数先输出，settimeout后输出。


//结果：a c e b
console.log("a");
setTimeout(() => {
    console.log("b")
});
var promise = new Promise((resolve, reject) => {
    console.log("c");
});

promise.then(() => {
    console.log("d");
});

console.log("e");

for (var i = 0; i < 5; i++) {
    (function () {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}      //5 5 5 5 5

for (let i = 0; i < 5; i++) {
    (function () {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}      //0 1 2 3 4



// setTimeout(function () {
//     console.log('定时器开始啦');
// });
//
// new Promise(function (resolve) {
//     console.log('马上执行for循环啦');
//
//     for (var i = 0; i < 10000; i++) {
//         i == 99 && resolve();
//     }
// }).then(function () {
//     console.log('执行then函数啦')
// });
//
// console.log('代码执行结束');


// setTimeout(function () {
//     console.log('setTimeout');
// });
//
// new Promise(function (resolve) {
//     console.log('promise');
// }).then(function () {
//     console.log('then');
// });
//
// console.log('console');

//   这段代码作为宏任务，进入主线程。
// 先遇到setTimeout，那么将其回调函数注册后分发到宏任务Event Queue。(注册过程与上同，下文不再描述)
//  接下来遇到了Promise，new Promise立即执行，then函数分发到微任务Event Queue。
// 	遇到console.log()，立即执行。
// 	好啦，整体代码script作为第一个宏任务执行结束，看看有哪些微任务？我们发现了then在微任务Event Queue里面，执行。
// 	ok，第一轮事件循环结束了，我们开始第二轮循环，当然要从宏任务Event Queue开始。我们发现了宏任务Event Queue中setTimeout对应的回调函数，立即执行。
// 	结束。


console.log('1');

setTimeout(function() {
    console.log('2');

    // process.nextTick(function() {
    //     console.log('3');
    // });

    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5');
    });

});

// process.nextTick(function() {
//     console.log('6');
// });


new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8');
});

setTimeout(function() {
    console.log('9');

    // process.nextTick(function() {
    //     console.log('10');
    // });

    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    });
});

// 整体script作为第一个宏任务进入主线程，遇到console.log，输出1。
// 遇到setTimeout，其回调函数被分发到宏任务Event Queue中。我们暂且记为setTimeout1。
// 遇到process.nextTick()，其回调函数被分发到微任务Event Queue中。我们记为process1。
// 遇到Promise，new Promise直接执行，输出7。then被分发到微任务Event Queue中。我们记为then1。
// 又遇到了setTimeout，其回调函数被分发到宏任务Event Queue中，我们记为setTimeout2。