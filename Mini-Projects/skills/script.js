
var canvas = document.getElementById('canvasSkills');
var canvas2 = document.getElementById('canvasText');


var ctxt = canvas.getContext('2d');
var ctxt2 = canvas2.getContext('2d');

function growPercentage(name, nameX, nameY, pX, initialY, finalY, dy, iP, fP, dp) {

    //    this.iLevel = ilevel;
    //    this.fLevel = fLevel;

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
        //          ctxt.fillText(Math.round(swiftPercentage < 85 ? swiftPercentage += 0.4 : swiftPercentage += 0) + "%",125, swiftText > 180 ? swiftText -=2 : swiftText -= 0);
        this.drawPercentage();
        this.drawSkillText();

    }

}




//
//
//    ctxt2.fillText(Math.round(javaPercentage < 85 ? javaPercentage += 0.4 : javaPercentage += 0) + "%",580, javaText > 180 ? javaText -=2 : javaText -= 0);
//    ctxt2.fillText("Java", 575, 640);
////
//    ctxt2.fillText(Math.round(phpPercentage < 75 ? phpPercentage += 0.4 : phpPercentage += 0) + "%",730, phpText > 280 ? phpText -=2 : phpText -= 0);
//    ctxt2.fillText("PHP", 725, 640);
////
//    ctxt2.fillText(Math.round(sketchPercentage < 70 ? sketchPercentage += 0.4 : sketchPercentage += 0) + "%",880, sketchText > 320 ? sketchText -=2 : sketchText -= 0);
//    ctxt2.fillText("Sketch", 865, 640);
//
//    ctxt2.fillText(Math.round(cssPercentage < 95 ? cssPercentage += 0.4 : cssPercentage += 0) + "%",1030, cssText > 100 ? cssText -=2 : cssText -= 0);
//    ctxt2.fillText("CSS", 1030, 640);

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

    this.drawBar = function() {
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
cssT .update();


}

// Text variables

const initialYPos = 580;

var swiftText = initialYPos;
var jSText = initialYPos;
var cPPText = initialYPos;
var javaText = initialYPos;
var phpText = initialYPos;
var cssText = initialYPos;
var sketchText = initialYPos;

// Percentage variables
var swiftPercentage = 0;
var jSPercentage = 0;
var cPlusPlusPercentage = 0;
var javaPercentage = 0;
var phpPercentage = 0;
var cssPercentage = 0;
var sketchPercentage = 0;



function animateText() {
    requestAnimationFrame(animateText);
    ctxt2.clearRect(0, 0, innerWidth, innerHeight);
//        ctxt2.strokeStyle = 'gray';
//    ctxt2.fillStyle = 'gray';
//    ctxt2.font = "22px Consolas";

swiftT.update();
//    ctxt2.fillText(Math.round(swiftPercentage < 85 ? swiftPercentage += 0.4 : swiftPercentage += 0) + "%",125, swiftText > 180 ? swiftText -=2 : swiftText -= 0);
//    ctxt2.fillText("Swift", 120, 640);

    ctxt2.fillText(Math.round(jSPercentage < 75 ? jSPercentage += 0.4 : jSPercentage += 0) + "%",280, jSText > 280 ? jSText -=2 : jSText -= 0);
    ctxt2.fillText("JavaScript", 250, 640);

    ctxt2.fillText(Math.round(cPlusPlusPercentage < 80 ? cPlusPlusPercentage += 0.4 : cPlusPlusPercentage += 0) + "%",430, cPPText > 230 ? cPPText -=2 : cPPText -= 0);
    ctxt2.fillText("C++", 430, 640);

    ctxt2.fillText(Math.round(javaPercentage < 85 ? javaPercentage += 0.4 : javaPercentage += 0) + "%",580, javaText > 180 ? javaText -=2 : javaText -= 0);
    ctxt2.fillText("Java", 575, 640);
//
    ctxt2.fillText(Math.round(phpPercentage < 75 ? phpPercentage += 0.4 : phpPercentage += 0) + "%",730, phpText > 280 ? phpText -=2 : phpText -= 0);
    ctxt2.fillText("PHP", 725, 640);
//
    ctxt2.fillText(Math.round(sketchPercentage < 70 ? sketchPercentage += 0.4 : sketchPercentage += 0) + "%",880, sketchText > 320 ? sketchText -=2 : sketchText -= 0);
    ctxt2.fillText("Sketch", 865, 640);

    ctxt2.fillText(Math.round(cssPercentage < 95 ? cssPercentage += 0.4 : cssPercentage += 0) + "%",1030, cssText > 100 ? cssText -=2 : cssText -= 0);
    ctxt2.fillText("CSS", 1030, 640);



}

function resetCanvas() {
window.scrollBy({
  top: 1200, // could be negative value
  left: 0,
  behavior: 'smooth'
});
    animate();
//    animateText();
        }

function scroll() {
    if (window.pageYOffset > 600) {

    }
}

window.onscroll = scroll;


