//MAP结构：类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
// Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// 如果需要“键值对”的数据结构，Map 比 Object 更合适。

const m = new Map();

const o = {p: 'liulu'};
m.set(o, 'content');
console.log(m);   //Map { { p: 'liulu' } => 'content' }
console.log(m.get(o)); //content

console.log(m.has(o)); //true
m.delete(o);
console.log(m.has(o)); //false

//===MAP的实例属性和操作方法===
//size属性
const s = new Map();
s.set('foo', true);
s.set('bar', false);
console.log(s.size); //2

//set(key,value);  //set方法设置键名key对应的键值为value，然后返回整个 Map 结构
//get(key);        //get方法读取key对应的键值，如果找不到key，返回undefined
//has(key);        //has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
// delete(key);    //delete方法删除某个键，返回true。如果删除失败，返回false。
//clear();         //clear方法清除所有成员，没有返回值。

//===遍历方法===
//Map 结构原生提供三个遍历器生成函数和一个遍历方法。

//keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。
// forEach()：遍历 Map 的所有成员。


console.log(s.keys());//MapIterator { 'foo', 'bar' }
console.log(s.values());//MapIterator { true, false }
console.log(s.entries());//MapIterator { [ 'foo', true ], [ 'bar', false ] }

s.forEach(function (item) {
    item === true ? console.log(item) : console.log('111');
});


//===与其他的结构的互相转换===

//MAP转数组
s.set('fun', true);
let sArr = [];
s.forEach(function (value, key) {
    let obj = {};
    obj[key] = value;
    sArr.push(obj);
});
console.log(sArr);


//数组转MAP,将数组传入 Map 构造函数，就可以转为 Map。
let sMap1 = new Map([sArr]);
console.log(sMap1);


//map转对象
let sObj = {};
s.forEach(function (value, key) {
    sObj[key] = value;
});
console.log(sObj);


//对象转MAP
let sMap2 = new Map();
for (let k of Object.keys(sObj)) {
    sMap2.set(k, sObj[k]);
}
console.log(sMap2);





