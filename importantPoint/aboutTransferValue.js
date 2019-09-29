/**
 * created by Administrator on 2019-9-23
 */
//js是按值传递
var obj = {
    a:1,
    arr:[1,2,3,4]
};

function changeObj(item) {
    item.arr[2] = 9;
    item.a = 8;
    console.log(item); //{ a: 8, arr: [ 1, 2, 9, 4 ] }

}

changeObj(obj);
console.log(obj); //{ a: 8, arr: [ 1, 2, 9, 4 ] }


function addTen(num) {
    num += 10;
    return num;
}

var count = 20;
var result = addTen(count);
console.log(count + ' | ' + result); // 20 | 30

// function setName(obj) {
//     obj.name = 'aaa';
//     return obj;
// }
//
// var person = {};
// person.name = 'bbb';
// var newPerson = setName(person);
// console.log(person.name + ' | ' + newPerson.name); // aaa | aaa

function setNameAgain(obj) {
    obj.name = 'aaa';
    var obj = new Object(); // 如果是按引用传递的,此处传参进来obj应该被重新引用新的内存单元
    obj.name = 'ccc';
    return obj;
}

var person = new Object();
person.name = 'bbb';
var newPerson = setNameAgain(person);
console.log(person.name + ' | ' + newPerson.name); // aaa | ccc //从结果看，并没有显示两个'ccc'。这里是函数内部重写了obj，重写的obj是一个局部对象。当函数执行完后，立即被销毁。


