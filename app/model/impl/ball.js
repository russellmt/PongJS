inherits(Ball, CircularObject);

function Ball(_x, _y, _speed) {
    CircularObject.call(this, _x, _y, BALL_RADIUS, _speed);

}