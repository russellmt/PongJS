inherits(ArcDrawable, Drawable);

function ArcDrawable() {
    Drawable.call(this);

    //Override
    this.draw = function(ctx, drawParams) {
        ctx.beginPath();
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