const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('../html/canvas.html');  //返回模板
};

app.use(main);
app.listen(3000);