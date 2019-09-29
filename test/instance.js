/**
 * created by Administrator on 2019-6-17
 */
function Test(name,age){
    this.name = name;
    this.age = age;
};
Test.prototype = {
    name:'aliyun',
    hasOwnproperty:function(){
        return false;
    }
};
var instance = new Test('alibaba',102);