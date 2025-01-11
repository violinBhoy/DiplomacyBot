//A class for a fleet
//for drawing and keeping track of the fleet
class Fleet {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx) {//equilateral triangle with sides of length 20
        ctx.fillStyle = "black";
        ctx.beginPath();//draw border
        ctx.moveTo(this.x-3, this.y-2);
        ctx.lineTo(this.x+23, this.y-2);
        ctx.lineTo(this.x+10, this.y+3+Math.sqrt(300));//the bottom point of the triangle
        ctx.fill();
        ctx.fillStyle = this.color;
        ctx.beginPath();//draw colored inside
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+20, this.y);
        ctx.lineTo(this.x+10, this.y+Math.sqrt(300));
        ctx.fill();
    }
}