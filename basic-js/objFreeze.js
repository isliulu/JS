/**
 * created by LiuLu on 2019-6-5
 */

//Object.freeze();可以冻结一个对象。一个被冻结的对象再也不能被修改，冻结了一个对象则不能向这个对象添加新的属性，不能删除已有的属性，
//    不能修改该对象已有属性的可枚举性、可配置性、可写性、以及不能修改已有属性的值。
//    冻结一个对象后该对象的原型也不能被修改。
//    freeze()返回和传入的参数相同的对象。！！！

'use strict';  //在严格模式下会报错TypeError: Cannot assign to read only property 'prop' of object '#<Object>'
const obj={
    prop:42
};

Object.freeze(obj);

obj.prop=33;

delete obj.prop;

console.log(obj);  //{prop:42}

