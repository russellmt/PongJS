inherits(RightPaddle, Paddle);

function RightPaddle(_y, _screenWidth) {
    Paddle.call(this, _screenWidth - 20, _y, 10, 50, 1);
}