//原型式继承
//Object.create();接收两个参数：一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
//若只传了一个参数，则Object.create()与object()方法行为相同。

//Object.create();的第二个参数与Object.defineProperties()方法的第二个参数格式相同：每个属性都是通过自己描述符定义的。以这种方式指定的任何属性都会覆盖原型对象上的同名属性。

let person = {
    name: 'liulu',
    friends: ["may", "andy", "lucy"]

};

let anotherPerson = Object.create(person);
anotherPerson.name = 'leeyowon';
anotherPerson.friends.push('erin');

let yetPerson = Object.create(person);
yetPerson.name = 'uie';
yetPerson.friends.push('jesscia');

console.log(person.friends); //[ 'may', 'andy', 'lucy', 'erin', 'jesscia' ]



// ====覆盖原型对象上的同名属性
let samePerson = Object.create(person,{
    name:{
        value:'soyeon'
    }
});
console.log(samePerson.name); //soyeon


