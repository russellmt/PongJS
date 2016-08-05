inherits(LeftPaddle, Paddle);

function LeftPaddle(_y, _screenWidth) {
    var paddlePos = _screenWidth / 30;
    Paddle.call(this, paddlePos, _y);
}