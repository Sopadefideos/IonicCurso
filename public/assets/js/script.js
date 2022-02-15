class Canvas {
    constructor(id) {
        this.can = document.getElementById(id);
        this.can.width = 900;
        this.can.height = 504;
        this.ctx = this.can.getContext('2d');
    }
}

class Background {
    constructor() {
        this.img = new Image();
        this.img.src = "images/bg.png";
        this.widthPoint = 0;
    }

    draw(ctx, maxWidth, speed) {
        ctx.drawImage(this.img, this.widthPoint, 0);
        ctx.drawImage(this.img, this.widthPoint + maxWidth, 0);
        if (this.widthPoint <= -maxWidth) {
            this.widthPoint = 0;
        }
        this.widthPoint -= speed;
    }
}

class Floor {
    constructor() {
        this.img = new Image();
        this.img.src = "images/game-bg-footer.png";
        this.widthPoint = 0;
        this.imgWidht = 466;
    }

    draw(ctx, speed) {
        ctx.drawImage(this.img, this.widthPoint, 450);
        ctx.drawImage(this.img, this.widthPoint + this.imgWidht, 450);
        ctx.drawImage(this.img, this.widthPoint + this.imgWidht * 2, 450);
        ctx.drawImage(this.img, this.widthPoint + this.imgWidht * 3, 450);

        if (this.widthPoint <= -this.imgWidht) {
            this.widthPoint = 0;
        }
        this.widthPoint -= speed;
    }
}

class Bird {
    constructor() {
        this.img = new Image();
        this.img.src = "images/bird.png";
        this.typeOfBirds = [0, 46, 92];
        this.bird = 0;
        this.x = 200;
        this.y = 200;
    }

    draw(ctx, changeBird) {
        ctx.drawImage(this.img, this.typeOfBirds[this.bird], 0, 46, 32, this.x, this.y, 46, 32);
        if (changeBird == 2) {
            this.bird++;
            if (this.bird == 3) {
                this.bird = 0;
            }
        }
    }
}

window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        startGame();
    };



    //MAIN FUNCTION TO START THE GAME AND INIT ALL OBJECTS
    function startGame() {
        var canvas = new Canvas('my-canvas');
        var background = new Background();
        var floor = new Floor();
        var bird = new Bird();
        var changeBird = 0;

        setInterval(() => {

            canvas.ctx.clearRect(0, 0, canvas.can.width, canvas.can.height);

            background.draw(canvas.ctx, canvas.can.width, 1);

            floor.draw(canvas.ctx, 3);

            bird.draw(canvas.ctx, changeBird);
            if (changeBird == 2) {
                changeBird = 0;
            }
            changeBird++;

        }, 1000 / 60);

    }

};