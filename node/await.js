/**
 * created by Administrator on 2018-11-30
 */

// await 操作符用于等待一个Promise对象，它只能在异步函数 async function 中使用。
// 语法： [return_value] = await expression;
// 表达式：一个 Promise 对象或者任何要等待的值。
// 返回值：返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。


// await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
// 若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。
// 若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。
// 另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。

//最好的学习方法就是不断的练习，反复琢磨，反复练习
/**
 * 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。
 * @param x
 * @returns {Promise<any>}
 */

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); //10
}
f1();


/**
 * 如果该值不是一个 Promise，await 会把该值转换为已正常处理的Promise，然后等待其处理结果
 * @returns {Promise<void>}
 */
async function f2() {
    var y = await 20;
    console.log(y); // 20
}
f2();


/**
 * 如果 Promise 处理异常，则异常值被抛出。
 * @returns {Promise<void>}
 */
async function f3() {
    try {
        var z = await Promise.reject(30);
    } catch (e) {
        console.log(e); // 30
    }
}
f3();
