var target = document.getElementById("preloader");
var bodyTarget = document.body;

function fadeOut(target) {

    var fadeEffect = setInterval(function () {
        if (!target.style.opacity) {
            target.style.opacity = 1;

        }
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.1;

        } else {
            clearInterval(fadeEffect);
            document.body.removeChild(target);
        }
    }, 200);

}

fadeOut(target);
//fadeOut();
var vidArray = ["video/stars2.mp4", "video/coding.mp4", "video/space.mp4"];
var counter = 0;

function switchVideo() {

    if (counter == 3) {
        counter = 0;
    }
    var bgVideo = document.getElementById("home");

    bgVideo.removeChild(bgVideo.childNodes[3]);

    var video = document.createElement('video');
    video.id = 'background-video';
    video.src = vidArray[counter];
    video.setAttribute("type", "video/mp4");
    video.setAttribute("muted", "muted");
    video.controls = false;
    video.autoplay = true;
    //    video.setAttribute("poster","video/space.jpg");
    video.loop = true;



    bgVideo.insertBefore(video, bgVideo.childNodes[3]);
    counter++;
    //
}
var audioCounter = 0;
const audioArray = ["audio/theNights.mp3", "audio/Extreme_Ways.mp3", "audio/onTopOfTheWorld.mp3"];

function switchAudio() {

    if (audioCounter == 3) {
        audioCounter = 0;
    }
    var bgAudio = document.getElementById("home");

    bgAudio.removeChild(bgAudio.childNodes[5]);

    var audio = document.createElement('audio');
    //    video.id = 'background-video';
    audio.src = audioArray[audioCounter];
    audio.setAttribute("type", "audio/mpeg");
    audio.autoplay = true;
    //    video.setAttribute("poster","video/space.jpg");
    audio.loop = true;



    bgAudio.insertBefore(audio, bgAudio.childNodes[5]);
    audioCounter++;
    //
}

var playTrack = true;

function muteTrack() {

    var bgAudio = document.getElementById("home");
    var audioTag = bgAudio.childNodes[5];

    if (playTrack == true) {
        audioTag.pause();
        playTrack = false;
    } else {
        audioTag.play();
        playTrack = true;

    }

}

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
        ctxt.font = "30px Consolas";
        ctxt.fillText(Math.round(this.iP) + "%", this.pX, this.initialY);
    }

    this.drawSkillText = function () {

        ctxt.fillStyle = 'gray';
        ctxt.font = "30px Consolas";
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
    swiftT.update();
    jsT.update();
    cppT.update();
    javaT.update();
    phpT.update();
    sketchT.update();
    cssT.update();

    swiftBar.grow();
    jsBar.grow();
    cppBar.grow();
    javaBar.grow();
    phpBar.grow();
    sketchBar.grow();
    cssBar.grow();



}

function resetCanvas() {
    var elmnt = document.getElementById("cSkills");
    elmnt.scrollIntoView();
    //window.scrollTo(300, 1000);
}

function scroll() {
    if (window.pageYOffset > 600) {
        animate();
    }
}

window.onscroll = scroll;
