/**
 * created by Administrator on 2019-3-18
 */
//与其他语言不同的是，js无须指定函数的返回值，因为任何ECMAScript函数都可以在任意时候返回任何值


//函数会在执行完return语句之后停止立即退出
//因此，位于return之后的任何代码都永远不会执行
function sum(sum1,sum2) {
    console.log('start');
    return sum1+sum2;
    console.log('end');
}
var a=sum(1,2);
console.log(a);