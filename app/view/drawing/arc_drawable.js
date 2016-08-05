inherits(ArcDrawable, Drawable);

function ArcDrawable() {
    Drawable.call(this);

    //Override
    this.draw = function(ctx, drawParams) {
        ctx.beginPath();
        _doDraw(ctx, drawParams);
    };

    //Override
    this.fill = function(ctx, drawParams) {
        ctx.beginPath();
        _doDraw(ctx, drawParams);
        ctx.fillStyle = drawParams.fillColor;
        ctx.fill();
    };

    
    //private
    function _doDraw(ctx, drawParams) {
        ctx.strokeStyle = drawParams.strokeColor;
        ctx.arc(
            drawParams.x,
            drawParams.y,
            drawParams.radius,
            0,
            2*Math.PI
        );
        ctx.stroke();
    }
}