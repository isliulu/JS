/**
 * created by Administrator on 2019-6-17
 */
//数组对象是引用的关系，array2改变，array1也会改变。array1改变，array2也会改变

var array1 = [1,2];

var array2 = array1;

array1[0] = array2[1];

array2.push(3);

console.log(array1); //[2,2,3]

console.log(array2);//[2,2,3]