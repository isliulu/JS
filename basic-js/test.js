/**
 * created by Administrator on 2019-3-28
 */

// function test() {
// //     console.log(this.a);
// // }
// //
// //  a = 2;
// // test();

// function foo(a) {
//     this.a = a;
// }
// var bar = new foo(2);
// console.log( bar.a ); // 2

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
console.log(test.call(obj.prop)); //call   apply   bind 改变this的指向