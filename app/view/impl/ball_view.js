inherits(BallView, ObjectView);

function BallView(_model) {
    ObjectView.call(this, _model, new ArcDrawable());

    //Override
    this.render = function(ctx) {
        var model = this.getModel();
        var drawable = this.getDrawable();

        drawable.fill(ctx, {
            x: model.getX(),
            y: model.getY(),
            radius: model.getRadius(),
            strokeColor: '#000000',
            fillColor: '#00ff00'
        });
    };
}