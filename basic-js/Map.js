/**
 * created by Administrator on 2019-3-21
 */

var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";


// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

console.log(myMap.size);
