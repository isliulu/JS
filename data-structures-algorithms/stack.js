let items = [];

function Stack() {
    this.push = function (element) {   //添加元素到栈顶
        items.push(element);
    };
    this.pop = function () {          //移除栈底的元素
        return items.pop();
    };
    this.peek = function () {          //返回栈顶的元素
        return items[items.length - 1]
    };
    this.isEmpty = function () {      //如果栈为空，则返回
        return items.length === 0;
    };
    this.size = function () {        //返回栈的长度
        return items.length;
    };
    this.clear = function () {      //清空栈
        items = [];
    };
}

let stack = new Stack();
stack.push(3);
stack.push(9);
console.log(stack.peek()); //9
console.log(stack.size()); //2
stack.pop();
console.log(stack.peek());//3
console.log(stack.size());//1
stack.clear();