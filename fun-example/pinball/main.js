//

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

//

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

//

function randomColor() {
    return 'rgb(' +
           random(0, 255) + ', ' +
           random(0, 255) + ', ' +
           random(0, 255) + ')';
}


function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;   //水平和竖直速度（velX 和 velY）
    this.velY = velY;
    this.color = color;  //每一个小球会有自己的颜色。
    this.size = size;   //小球的半径，以像素为单位。
}

Ball.prototype.draw = function() {
    ctx.beginPath();                     //声明我们现在要开始在纸上画一个图形
    ctx.fillStyle = this.color;         //定义这个图形的颜色 — 这个值正是小球的颜色属性
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);  //画出一段圆弧
    ctx.fill();                         //声明我们结束了以 beginPath() 开始的绘画
};

// var testBall = new Ball(50, 100, 4, 4, 'blue', 10);
//
// testBall.x;
// testBall.size;
// testBall.color;
// testBall.draw();

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
};

var balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball(
            random(0,width),
            random(0,height),
            random(-7,7),
            random(-7,7),
            randomColor(),
            random(10,20)
        );
        balls.push(ball);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();