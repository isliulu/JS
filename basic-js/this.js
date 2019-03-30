/**
 * created by Administrator on 2019-3-21
 */
//this 永远指向最后调用它的那个对象
//this，函数执行的上下文，可以通过apply，call，bind改变this的指向。对于匿名函数或者直接调用的函数来说，
// this指向全局上下文（浏览器为window，nodejs为global），剩下的函数调用，那就是谁调用它，this就指向谁。
// 当然还有es6的箭头函数，箭头函数的指向取决于该箭头函数声明的位置，在哪里声明，this就指向哪里。

//箭头函数的 this 始终指向函数定义时的 this，而非执行时。
// 箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，
// 则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。

// this 提供了一种更优雅的方式来隐式“传递”一个对象引用
// this 并不像我们所想的那样指向函数本身。需要明确的是， this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用
// 域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过 JavaScript代码访问，它存在于 JavaScript 引擎内部。

// var me = {
//     name: "Kyle"
// };
// var you = {
//     name: "Reader"
// };
//
// function identify() {
//     return this.name.toUpperCase();
// }
//
// function speak() {
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }
//
// identify.call( me ); // KYLE
// identify.call( you ); // READER
// speak.call(me); // Hello, 我是 KYLE
// speak.call(you); // Hello, 我是 READER

//对this 的'误解'
/**
 *
 * @param num
 */
// function foo(num) {
//     console.log( "foo: " + num );
// // 记录 foo 被调用的次数
//     this.count++;
// }
// foo.count = 0;          //执行 foo.count = 0 时，的确向函数对象 foo 添加了一个属性 count 。
//                         // 但是函数内部代码this.count 中的 this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同
// var i;
// for (i=0; i<10; i++) {
//     if (i > 5) {
//         foo( i );
//     }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // foo 被调用了多少次？
// console.log( foo.count ); // 0 -- WTF?


//
/**
 * 回避this
 * 解决方法一：利用词法作用域
 * @param num
 */
// function foo(num) {
//     console.log( "foo: " + num );
// // 记录 foo 被调用的次数
//     data.count++;    //利用词法作用域解决
// }
// var data = {
//     count: 0
// };
// var i;
// for (i=0; i<10; i++) {
//     if (i > 5) {
//         foo( i );
//     }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // foo 被调用了多少次？
// console.log( data.count ); // 4


//
/**
 * 回避this
 * 解决方法二：使用 foo 标识符替代 this 来引用函数对象
 * @param num
 */
// function foo(num) {
//     console.log( "foo: " + num );
// // 记录 foo 被调用的次数
//     foo.count++;
// }
// foo.count=0;
// var i;
// for (i=0; i<10; i++) {
//     if (i > 5) {
//         foo( i );
//     }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // foo 被调用了多少次？
// console.log( foo.count ); // 4

//
/**
 * 接受this
 * 强制 this 指向 foo 函数对象   //apply 和 call 都可以，只是两个所携带的参数不一样
 * @param num
 */
function foo(num) {
    console.log( "foo: " + num );
// 记录 foo 被调用的次数
// 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo
    this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
    if (i > 5) {
// 使用 call(..) 可以确保 this 指向函数对象 foo 本身
        foo.call( foo, i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log( foo.count ); // 4



