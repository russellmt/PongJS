inherits(Paddle, GameObject);

function Paddle(_x, _y) {
    Paddle.call(this, _x, _y, PADDLE_WIDTH, PADDLE_HEIGHT, 0);
}