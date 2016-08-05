function GameObject (_x, _y, _speed) {
    var x = _x;
    var y = _y;
    var speed = _speed;

    this.getX = function() {
        return x;
    };

    this.setX = function(__x) {
        this.x = __x;
    };

    this.getY = function() {
        return y;
    };

    this.setY = function(__y) {
        this.y = __y;
    };

    this.getSpeed = function() {
        return speed;
    };

    this.setSpeed = function(__speed) {
        this.speed = __speed;
    };
}