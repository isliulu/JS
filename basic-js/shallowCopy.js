var obj1 = {
    name: 'leeyowon',
    age: 18,
    lanuage: [
        1,
        [2, 3],
        [4, 5]
    ]
};


var obj2 = obj1;


function shallowCopy(data) {
    var newData = {};

    for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
            newData[prop] = data[prop]
        }
    }

    return newData;
}

var obj3 = shallowCopy(obj1);


obj2.name = 'liulu';

obj3.age = 9;

obj2.lanuage[1] = ['二', '三'];

obj3.lanuage[2] = ['四', '五'];

console.log(obj1);  //原始数据

console.log(obj2);  //通过赋值得到的

console.log(obj3);  //浅拷贝得到的