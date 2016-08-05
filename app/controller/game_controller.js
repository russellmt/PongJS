function GameController(_frameRate) {

    var frameRate = _frameRate;
    var frameLength = 1000 / _frameRate;
    var updater;
    var renderer;

    (function() {
        var canvas = document.getElementById('thegame');
        var initializer = new Initializer(canvas);
        
        var models = initializer.createModels();
        updater = new Updater(models);

        var views = initializer.createViews(models);
        renderer = new Renderer(canvas, views);
    })();

    this.runGame = function() {
        var startTime = Date.now();

        updater.updateGame();
        renderer.renderGame();

        var endTime = Date.now();
        var delay = frameLength - (endTime - startTime);

        if (delay > 0) {
            setTimeout(this.runGame, delay)
        } else {
            this.runGame();
        }
    };

    this.setFrameRate = function() {
        return frameRate;
    };

    
}