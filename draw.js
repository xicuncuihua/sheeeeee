const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 40;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();
    console.log(fruit)

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            //     console.log("EATING")
            fruit.pickLocation(); // 如果碰到再次执行一次随机位置函数
        }

    }, 100);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))