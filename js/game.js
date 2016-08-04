function Game(_width, _height) {
    var canvas = document.getElementById("thegame");
    var ctx = canvas.getContext("2d");
    var width = _width;
    var height = _height;

    this.getWidth = function() {
        return width;
    };

    this.getHeight = function() {
        return height;
    };

    this.getContext = function() {
        return ctx;
    };
}