inherits(RightPaddle, Paddle);

function RightPaddle(_y, _screenWidth) {
    var paddlePos = _screenWidth - (_screenWidth / 30 + PADDLE_WIDTH);
    Paddle.call(this, paddlePos, _y);
}