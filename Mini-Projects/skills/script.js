var canvas = document.getElementById('canvasSkills');



var ctxt = canvas.getContext('2d');


function growPercentage(name, nameX, nameY, pX, initialY, finalY, dy, iP, fP, dp) {

    this.name = name;
    this.nameX = nameX;
    this.nameY = nameY;
    this.pX = pX;
    this.initialY = initialY;
    this.finalY = finalY;
    this.dy = dy;
    this.iP = iP;
    this.fP = fP;
    this.dp = dp;

    this.drawPercentage = function () {
        //    ctxt.strokeStyle = 'gray';
        ctxt.fillStyle = 'gray';
        ctxt.font = "22px Consolas";
        ctxt.fillText(Math.round(this.iP) + "%", this.pX, this.initialY);
    }

    this.drawSkillText = function () {
        ctxt.fillStyle = 'gray';
        ctxt.font = "22px Consolas";
        ctxt.fillText(this.name, this.nameX, this.nameY);
    }

    this.update = function () {

        if (this.iP < this.fP) {
            this.iP += this.dp;
        }

        if (this.initialY > this.finalY) {
            this.initialY -= this.dy;
        }
        this.drawPercentage();
        this.drawSkillText();
    }

}

var swiftT = new growPercentage("Swift", 125, 650, 125, 580, 180, 2, 0, 85, 0.4);
var jsT = new growPercentage("JavaScript", 250, 650, 280, 580, 280, 2, 0, 75, 0.4);
var cppT = new growPercentage("C++", 430, 650, 430, 580, 230, 2, 0, 80, 0.4);
var javaT = new growPercentage("Java", 575, 650, 580, 580, 180, 2, 0, 85, 0.4);
var phpT = new growPercentage("PHP", 725, 650, 730, 580, 280, 2, 0, 75, 0.4);
var sketchT = new growPercentage("Sketch", 865, 650, 880, 580, 320, 2, 0, 70, 0.4);
var cssT = new growPercentage("CSS", 1030, 650, 1030, 580, 100, 2, 0, 95, 0.4);


function graphBar(x, y, w, h, dy, g) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dy = dy;
    this.g = g;

    this.drawBar = function () {
        ctxt.fillStyle = 'rgba(0, 214, 214, 0.9)';
        ctxt.fillRect(this.x, this.y, this.w, this.h);

    }

    this.grow = function () {
        if (this.h > -this.g) {
            this.h -= this.dy;
        }
        this.drawBar();
    }
}

var swiftBar = new graphBar(100, 600, 100, 0, 2, 400);
var jsBar = new graphBar(250, 600, 100, 0, 2, 300);
var cppBar = new graphBar(400, 600, 100, 0, 2, 350);
var javaBar = new graphBar(550, 600, 100, 0, 2, 400);
var phpBar = new graphBar(700, 600, 100, 0, 2, 300);
var sketchBar = new graphBar(850, 600, 100, 0, 2, 260);
var cssBar = new graphBar(1000, 600, 100, 0, 2, 480);

function animate() {
    requestAnimationFrame(animate);
    ctxt.clearRect(0, 0, innerWidth, innerHeight);
    swiftBar.grow();
    jsBar.grow();
    cppBar.grow();
    javaBar.grow();
    phpBar.grow();
    sketchBar.grow();
    cssBar.grow();


    swiftT.update();
    jsT.update();
    cppT.update();
    javaT.update();
    phpT.update();
    sketchT.update();
    cssT.update();
}

function resetCanvas() {
    window.scrollBy({
        top: 1200, // could be negative value
        left: 0,
        behavior: 'smooth'
    });
    animate();
}

function scroll() {
    if (window.pageYOffset > 600) {

    }
}

window.onscroll = scroll;
