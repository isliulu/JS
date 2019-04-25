//ECMAScript只支持接口继承，其实现继承主要是依靠原型链来实现的。

//原型链：利用原型让一个引用类型继承另一个引用类型的属性和方法。

//构造函数，原型和实例之间的关系：每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();


//添加新方法
SubType.prototype.getSubValue = function () {
    return this.subproperty
};

let instance = new SubType();
console.log(instance.getSuperValue());  //true
console.log(instance.getSubValue());  //false

//确定实例和原型的关系
console.log(instance instanceof Object);  //true
console.log(instance instanceof SuperType); //true
console.log(instance instanceof SubType); //true


//重写超类型中的方法 //console.log(instance.getSuperValue());  //false

// SubType.prototype.getSuperValue = function () {
//     return false;
// };