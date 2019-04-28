//为什么要调用await next()

//原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数，
//我们把每个async函数称为middleware,这些middleware可以组合起来，完成很多有用的功能。

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    await next();                            //next是koa传入的将要处理的下一个异步函数
    ctx.response.body = '<h1>hhhhhhhaaaaa</h1>'
});

app.listen(3000);