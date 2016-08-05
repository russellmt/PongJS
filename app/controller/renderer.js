function Renderer(_canvas, _views) {
    var ctx = _canvas.getContext('2d');
    var views = _views;
    
    this.renderGame = function() {
        for (var i = 0; i < views.length; i++) {
            views[i].render(ctx);
        }
    };
}