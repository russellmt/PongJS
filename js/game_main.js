function inherits(childConstructor, parentConstructor) {
	var TempConstructor = function(){};
	TempConstructor.prototype = parentConstructor.prototype;
	childConstructor.prototype = new TempConstructor();
	childConstructor.prototype.constructor = childConstructor;
}

(function() {
	function Game(_width, _height) {
		var canvas = document.getElementById("thegame");
		var ctx = canvas.getContext("2d");
		var width = _width;
		var height = _height;

		this.getWidth = function() {
			return width;
		}

		this.getHeight = function() {
			return height;
		}

		this.getContext = function() {
			return ctx;
		}
	}

	function Paddle(_x, _y, _width, _height, _speed) {
		var x = _x;
		var y = _y;
		var width = _width;
		var height = _height;
		var speed = _speed;

		this.getX = function() {
			return x;
		}

		this.setX = function(__x) {
			this.x = __x;
		}

		this.getY = function() {
			return y;
		}

		this.setY = function(__y) {
			this.y = __y;
		}

		this.getWidth = function() {
			return width;
		}

		this.getHeight = function() {
			return height;
		}

		this.getSpeed = function() {
			return speed;
		}

		this.setSpeed = function(__speed) {
			this.speed = __speed;
		}

	}

	function LeftPaddle(_y) {
		Paddle.call(this, 10, _y, 10, 50, 1);
	}

	function RightPaddle(_y, _screenWidth) {
		Paddle.call(this, _screenWidth - 20, _y, 10, 50, 1);
	}

	inherits(LeftPaddle, Paddle);
	inherits(RightPaddle, Paddle);



	//the program
	Game game = new Game(800, 500);
	LeftPaddle leftPaddle = new LeftPaddle(30);
	RightPaddle rightPaddle = new RightPaddle(50, game.getWidth());
})();