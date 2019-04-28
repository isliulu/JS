//在koa2中，导入的是class,因此用大写的Koa
const Koa = require('koa');

//创建一个Koa对象，表示web app 本身
const app = new Koa();

//对于任何请求，app 将调用该异步函数处理请求
app.use(async ctx => {                     //参数ctx 是由koa传入的封装了request 和response 的变量，可以通过它来访问request 和response
    ctx.response.body = '<h1>hello i love u </h1>';  // 这是 Context
});

app.listen(3000);
