inherits(RectangularObject, GameObject);

function RectangularObject(_x, _y, _width, _height, _speed) {
    GameObject.call(this, _x, _y, _speed);

    var width = _width;
    var height = _height;

    this.getWidth = function() {
        return width;
    };

    this.getHeight = function() {
        return height;
    };
}