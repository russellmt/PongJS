function Renderer(_canvas) {
    
    var canvas = _canvas;
    var ctx = _canvas.getContext();
    var views = [];

    this.addView = function(view) {
        views.push(view);
    };
    
    this.renderGame = function() {
        for (var i = 0; i < views.length; i++) {
            views[i].render(ctx);
        }
    };
    
}