function Initializer(_canvas) {

    var canvas = _canvas;
    
    this.createModels = function() {
        var models = [];
        models.push(new LeftPaddle(50, canvas.width));
        models.push(new RightPaddle(50, canvas.width));
        models.push(new Ball(200, 300, 3));

        return models;
    };
    
    this.createViews = function(models) {
        var views = [];
        for (var i = 0; i < models.length; i++) {
            var model = models[i];
            switch (model.constructor.name) {
                case 'LeftPaddle':
                case 'RightPaddle':
                    views.push(new PaddleView(model));
                    break;
                case 'Ball':
                    views.push(new BallView(model));
                    break;
            }
        }
        return views;
    };
}