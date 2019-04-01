/**
 * created by Administrator on 2019-4-1
 */

//基本数据类型变量复制  ->两个变量参与任何操作不会影响   （栈存储）
var num1 = 1;
var num2 = num1;
num1 = 6;
console.log(num1);//6
console.log(num2);//1


//引用类型变量复制   ->两个变量引用的都是同一个对象   （堆存储）
var obj1 = new Object();

var obj2 = obj1;

obj1.name = 'liulu';

console.log(obj1.name);  //liulu
console.log(obj2.name);  //liulu