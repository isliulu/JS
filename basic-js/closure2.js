/**
 * created by Administrator on 2019-3-26
 */
//无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用
// 域的引用，无论在何处执行这个函数都会使用闭包。

//first
// function foo() {
//     var a = 2;
//
//     function bar() {
//         console.log(a);
//     }
//
//     return bar;
// }
//
// var baz = foo();
//
// baz(); //这就是闭包的效果

//second
//将内部函数uie传递给exc；直接传递

function lee() {
    var b = 3;

    function uie() {
        console.log(b);
    }

    exc(uie);

}

function exc(fn) {
    fn();               //这也是闭包的一种
}

//third
//间接传递

var pn;

function prac() {
  var d=4;
  
  function op() {
      console.log(d);
  }
  
  pn=op;   //将op分配给全局变量
}

function excr() {
    pn();
}

prac();
excr();//4


//fourth
// function wait(msg) {
//     setTimeout(function () {
//         console.log(msg);
//     },1000)
// }
// wait('hello closure!');

//fifth
for (var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}  //6 6 6 6 6     延迟函数的回调会在循环结束时才执行

for (var i=1; i<=5; i++) {
    (function (j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })(i);
}

// for (let i=1; i<=5; i++) {
//     setTimeout( function timer() {
//         console.log( i );
//     }, i*1000 );
// } //1 2 3 4 5