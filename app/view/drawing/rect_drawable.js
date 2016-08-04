inherits(RectDrawable, Drawable);

function RectDrawable() {
    Drawable.call(this);

    //Override
    this.draw = function(ctx, drawParams) {
        ctx.rect(
            drawParams.x,
            drawParams.y,
            drawParams.width,
            drawParams.height
        );
    }
}