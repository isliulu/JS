//async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
//async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。

const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};

let learnEs = async function f() {
    const a = await readFile('/etc/shells');
    console.log(a.toString());
    return a.toString();
};

learnEs()
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

//50毫秒后输出一个值
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 50);


// ======函数声明======
async function foo1() {
}

foo1().then();

// 函数表达式
const foo2 = async function () {
};
foo2().catch();

// 对象的方法
let obj = {
    async foo3() {
    }
};
obj.foo3().then();


// 箭头函数
const foo4 = async () => {
};

foo4().finally();