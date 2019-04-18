//Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理
//特点：对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
//一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
});


//执行顺序： Promise   Hi  resolved
//then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

let promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('resolved.');
});

console.log('Hi!');


//调用resolve或reject并不会终结 Promise 的参数函数的执行。
// new Promise((resolve, reject) => {
//     resolve(1);
//     console.log(2);
// }).then(r => {
//     console.log(r);
// });                      //2  1

//调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
// 所以，最好在它们前面加上return语句，这样就不会有意外。

new Promise((resolve, reject) => {
    return resolve(1);
    // 后面的语句不会执行
    console.log(2);
});

//第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
// getJSON("/posts.json").then(function(json) {
//     return json.post;
// }).then(function(post) {
//     // ...
// });


var p = new Promise(resolve => {
});
console.log(p);


//promise抛出一个错误，就被catch方法指定的回调函数捕获
const promise1 = new Promise(function(resolve, reject) {
    throw new Error('test');
});
promise1.catch(function(error) {
    console.log(error);
});


promise
    .then(result => {})
    .catch(error => {})
    .finally(() => {});

//不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
//finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。
// 这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果


//Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

const p0 = Promise.all([p1, p2, p3]);
//只有p1、p2、p3的状态都变成fulfilled，p0的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p0的回调函数。
//只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
