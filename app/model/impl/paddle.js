inherits(Paddle, RectangularObject);

function Paddle(_x, _y) {
    RectangularObject.call(this, _x, _y, PADDLE_WIDTH, PADDLE_HEIGHT, 0);
}