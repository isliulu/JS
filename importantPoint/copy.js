/**
 * created by Administrator on 2019-9-12
 */

//js的深浅拷贝

//js的数据类型：
// 基本数据类型：null undefined boolean string number symbol
// 引用数据类型：object function array

// 存储方式：

//基本数据类型：栈 ->栈（stack）为自动分配的内存空间，它由系统自动释放
//引用数据类型：堆 ->堆（heap）则是动态分配的内存，大小不定也不会自动释放。

//比较两个引用类型，是看其的引用是否指向同一个对象
var a = [1,2,3];
var b = [1,2,3];

console.log(a ===b); //false
console.log(a == b); //false

var _null = null;

if(_null === null){
    console.log(_null);
}else{
    console.log('not null');
}

//深拷贝和浅拷贝只针对Object,Array这样的复杂对象
//浅拷贝只复制一层对象的属性，而深拷贝则递归复制了所有的层级；





var obj = {
  a:1,
  arr:[2,3]
};

//实现赋值
var simpleObj = obj;
// simpleObj.a = 6;
// console.log(simpleObj); //{ a: 6, arr: [ 2, 3 ] }
// console.log(obj);//{ a: 6, arr: [ 2, 3 ] }


//实现浅拷贝 浅拷贝会导致 obj.arr 和 shallowObj.arr 指向同一块内存地址
var shallowObj = shallowCopy(obj);

function shallowCopy(src) {
    var dst = {};
    for(var prop in src){
        if(src.hasOwnProperty(prop)){
            dst[prop] = src[prop];
        }
    }
    return dst;
}
// shallowObj.a = 6;
// shallowObj.arr[1] = 5;
// console.log(shallowObj); //{ a: 6, arr: [ 2, 5 ] }//obj 和 shallowObj 的 arr 属性指向同一个对象
// console.log(obj); //{ a: 1, arr: [ 2, 5 ] }

//深拷贝
// 不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。
// 这就不会存在上面 obj 和 shallowObj 的 arr 属性指向同一个对象的问题。

function deepCopy(obj) {
    //定义一个对象，用来确定当前的参数是数组还是对象
    var objArray = Array.isArray(obj) ? [] :{};
    //如果obj存在，且类型为对象
    if(obj && typeof obj === 'object'){
        for(var key in obj){
            if(obj.hasOwnProperty(key)){
                //如果obj 的子元素是对象，则进行递归操作
                if(obj[key] && typeof obj[key] === 'object'){
                    objArray[key] = deepCopy(obj[key]);
                }else{
                    //如果不是，直接赋值
                    objArray[key] = obj[key];
                }

            }
        }
    }

    return objArray;
}

var deepObj = deepCopy(obj);
deepObj.a = 6;
deepObj.arr[1] = 5;
console.log(deepObj); //{ a: 6, arr: [ 2, 5 ] } //深拷贝的值不会影响到原值
console.log(obj); //{ a: 1, arr: [ 2, 3 ] }
