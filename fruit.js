function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function() { //水果随即出现
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#ffd800";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}