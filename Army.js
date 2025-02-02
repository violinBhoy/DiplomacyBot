//A class for the Army
//this draws the army, keeps track of location, and its order
class Army {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.side = 20;
    }

    draw(ctx) {
        ctx.fillStyle = "black";//black border
        ctx.fillRect(this.x-2, this.y-2, this.side+4, this.side+4);
        ctx.fillStyle = this.color;//square army the color of country
        ctx.fillRect(this.x, this.y, this.side, this.side);
    }
}
