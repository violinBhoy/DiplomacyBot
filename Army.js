//A class for the Army
//this draws the army, keeps track of location, and its order
function Army(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.side = 20;

    this.draw = function(ctx) {
        ctx.fillStyle = "black";//black border
        ctx.fillRect(x-2, y-2, this.side+4, this.side+4);
        ctx.fillStyle = color;//square army the color of country
        ctx.fillRect(x, y, this.side, this.side);
    }
}