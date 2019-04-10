//let 所声明的变量，只在let命令所在的代码块内有效,块级作用域；不存在变量名提升；

{
    let a = 1;
    console.log(a);  //1
}

// console.log(a);  //ReferenceError:


//const 声明一个只读的常量。一旦声明，常量的值就不能改变。