//执行环境
//全局执行环境是最外围的一个执行环境。在浏览器中，全局执行环境被认为是window对象；
//因此所有的全局变量和函数都是作为window对象的属性和方法创建来的。

//每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中，而在函数执行之后，栈将其环境弹出，
// 把控制权返回给之前的执行环境。

var color = 'blue';

function changeColor() {
    var anotherColor = 'red';

    function swapColor() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;

       //这里可以访问color，anotherColor，tempColor
    }

    //这里可以访问color，anotherColor；不能访问tempColor
    swapColor();
}

//这里只能访问color
changeColor();