//字符串的扩展

//1.字符串可以被 for...of遍历循环

for (let name of 'liulu') {
    console.log(name);
}

//2.新增 includes():返回布尔值，表示是否找到了参数字符串
//       startsWith():返回布尔值，表示参数字符串是否在原字符串的头部
//       endsWith():返回布尔值，表示参数字符串是否在原字符串的尾部

let s = 'hello world';

console.log(s.includes('d'));  //true
console.log(s.startsWith('h')); //true
console.log(s.endsWith('d'));  //true