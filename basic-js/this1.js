/**
 * created by Administrator on 2019-3-21
 */

// function baz() {
// // 当前调用栈是：baz
// // 因此，当前调用位置是全局作用域
//     console.log( "baz" );
//     bar(); // <-- bar 的调用位置
// }
// function bar() {
// // 当前调用栈是 baz -> bar
// // 因此，当前调用位置在 baz 中
//     console.log( "bar" );
//     foo(); // <-- foo 的调用位置
// }
// function foo() {
// // 当前调用栈是 baz -> bar -> foo
// // 因此，当前调用位置在 bar 中
//
//     console.log( "foo" );
// }
// baz(); // <-- baz 的调用位置


/**
 * 虽然 this 的绑定规则完全取决于调用位置，但是只有 foo() 运行在非 strict mode 下时，
 * 默认绑定才能绑定到全局对象；严格模式下与 foo()的调用位置无关：
 */


function foo() {
    console.log( this.a );
}

var a = 2;

(function(){
    "use strict";
    foo(); // 2
})();
