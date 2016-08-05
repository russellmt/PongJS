function ObjectView(_model, _drawable) {
    var model = _model;
    var drawable = _drawable;

    //abstract
    this.render = function(ctx) {};
    

    this.getModel = function() {
        return model;
    };

    this.getDrawable = function() {
        return drawable;
    };
}