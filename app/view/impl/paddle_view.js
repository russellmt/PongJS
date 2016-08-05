inherits(PaddleView, ObjectView);

function PaddleView(_model) {
    ObjectView.call(this, _model, new RectDrawable());
    
    //Override
    this.render = function(ctx) {
        var model = this.getModel();
        var drawable = this.getDrawable();

        drawable.fill(ctx, {
            x: model.getX(),
            y: model.getY(),
            width: model.getWidth(),
            height: model.getHeight(),
            strokeColor: '#000000',
            fillColor: '#ff0000'
        });
    };
}