//数组的扩展

//扩展运算符 (...); 好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

console.log(...[1, 2, 3]);

//合并数组

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
console.log(arr1.concat(arr2, arr3));   //浅拷贝
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
console.log([...arr1, ...arr2, ...arr3]); //浅拷贝
// [ 'a', 'b', 'c', 'd', 'e' ]

//Map 和 Set 结构，Generator 函数

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
let arr = [...map.keys()]; //[ 1, 2, 3 ]

let val = [...map.values()];//[ 'one', 'two', 'three' ]

console.log(arr);
console.log(val);