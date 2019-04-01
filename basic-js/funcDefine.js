/**
 * created by Administrator on 2019-4-1
 */

//定义函数：
// 第一种：函数声明  重要的特征：函数声明提升

// funName('函数声明',1);   //不会报错，存在函数声明提升
function funName(arg1,arg2) {
    //函数体
    console.log(arg1,arg2);
}

funName('函数声明',1);  //执行函数

// 第二种：函数表达式

// fun2('函数表达式',2);        //这样会报错  fun2 is not a function；

var fun2 =function (arg1,arg2) {
    //函数体
    console.log(arg1,arg2);
};

fun2('函数表达式',2);
