//借用构造函数
//思想：在子类型构造函数的内部调用超类型构造函数。
//优点：可以在子类型构造函数中想超类型的构造函数传递参数。

function SuperType() {
    this.colors = ["red", "green", "blue"];
}

function SubType() {
    //继承了SuperType
    SuperType.call(this);
}

let instance = new SubType();
instance.colors.push("black");
console.log(instance.colors); //[ 'red', 'green', 'blue', 'black' ]

let instance2 = new SubType();
console.log(instance2.colors); //[ 'red', 'green', 'blue' ]


