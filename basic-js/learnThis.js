/**
 * created by Administrator on 2019-3-30
 */

//改变this的指向


// var name = "windowsName";
//
// var a = {
//     name: "Cherry",
//
//     func1: function () {
//         console.log(this.name)
//     },
//
//     func2: function () {
//         // var self =this;                // 这样可以保证this不发生变化
//         // setTimeout(  function () {
//         //     self.func1()
//         // },100);
//
//         // setTimeout(  function () {
//         //     this.func1()
//         // },100);                      //调用的是window      // this.func1 is not a function
//
//         // this.func1()              //调用的是对象a           //Cherry
//
//         // setTimeout( ()=>{
//         //     this.func1()
//         // },100);                  //箭头函数改变了this的指向，箭头函数的 this 始终指向函数定义时的 this，而非执行时
//         // 箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，
//         // 则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined
//
//
//         setTimeout(function () {
//             this.func1();
//         }.call(a), 100);
//     }
//
// };
//
//
// a.func2();

var a ={
    name : "Cherry",
    fn : function (a,b) {
        console.log( a + b)
    }
};

var b = a.fn;
// b.call(a,1,2);
// b.apply(a,[1,2]); // apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。


    //bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

// b.bind(a,1,2);   //这样输出无结果，需要手动调用
b.bind(a,1,2)();