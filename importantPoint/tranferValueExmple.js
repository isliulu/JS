/**
 * created by Administrator on 2019-9-24
 */


function addNum(num) {
    num = num + 10;
    return num;
}

var count = 20;
var result = addNum(count);

console.log(count + '|' + result); //20|30

function setName(obj) {
    obj.name = 'Tina';
    return obj;
}

var lastObj = new Object();
lastObj.name = 'Lucy';

var newObj = setName(lastObj);
console.log(lastObj.name + '|' + newObj.name); //Tina|Tina //这里刚开始会有疑惑


function setArray(arr) {
    arr[0] = 1;
    var arr = new Array(); //这里的地址改变了
    arr[0] = 6;
    return arr;
}

var lastArr = new Array();
lastArr[0] = 0;
var newArr = setArray(lastArr);
console.log(lastArr[0] + '|' + newArr[0]); // 1|6


function setNameAgain(obj) {
    obj.name = 'aaa';
    var obj = new Object(); // 如果是按引用传递的,此处传参进来obj应该被重新引用新的内存单元
    obj.name = 'ccc';
    return obj;
}

var person = new Object();
person.name = 'bbb';
var newPerson = setNameAgain(person);
console.log(person.name + ' | ' + newPerson.name); //aaa | ccc


