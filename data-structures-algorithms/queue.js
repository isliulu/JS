let items = [];

function Queue() {
    this.enqueue = function (element) {   //从队尾添加元素
        items.push(element);
    };
    this.dequeue = function () {         //移除队列的队首
        return items.shift();
    };
    this.front = function () {         //返回队列中第一个元素——最先被添加
        return items[0];
    };
    this.isEmpty = function () {
        return items.length === 0     //队列为空则返回
    };
    this.clear = function () {      //清空队列
        items = [];
    };
    this.size = function () {      //返回队列长度
        return items.length;
    };
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(9);
console.log(queue.front()); //3
console.log(queue.size());  //2
queue.dequeue();
console.log(queue.front());  //9
console.log(queue.isEmpty()); //false
console.log(queue.size()); //1
