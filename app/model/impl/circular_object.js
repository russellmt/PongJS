inherits(CircularObject, GameObject);

function CircularObject(_x, _y, _radius, _speed) {
    GameObject.call(this, _x, _y, _speed);

    var radius = _radius;

    this.getRadius = function() {
        return radius;
    };
}