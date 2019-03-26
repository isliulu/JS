/**
 * created by Administrator on 2019-3-26
 */

//闭包是指有权访问另一个函数作用域中的变量的函数。

//内部函数的作用域链中包含createComparisonFunction()的作用域
//当某个函数被调用时，会创建一个执行环境（execution context）及相应的作用域链。
//然后，使用 arguments 和其他命名参数的值来初始化函数的活动对象（activation object）。但在作用域链中，外部函数的活动对象始终处于第二位，
//外部函数的外部函数的活动对象处于第三位，……直至作为作用域链终点的全局执行环境。
function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

//创建函数
var compareNames = createComparisonFunction("name");

//调用函数
var result = compareNames({ name: "Nicholas" }, { name: "Greg" });

//解除对匿名函数的引用（以便释放内存）
compareNames = null;