function GameObject (_x, _y, _width, _height, _speed) {
    var x = _x;
    var y = _y;
    var width = _width;
    var height = _height;
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

    this.getWidth = function() {
        return width;
    };

    this.getHeight = function() {
        return height;
    };

    this.getSpeed = function() {
        return speed;
    };

    this.setSpeed = function(__speed) {
        this.speed = __speed;
    };
}