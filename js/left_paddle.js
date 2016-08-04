inherits(LeftPaddle, Paddle);

function LeftPaddle(_y) {
    Paddle.call(this, 10, _y, 10, 50, 1);
}