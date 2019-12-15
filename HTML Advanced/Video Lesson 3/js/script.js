window.addEventListener("DOMContentLoaded", init, false);
const START_BTN_ID = "start";
const VIDEO_PLAYER_ID = "videoPlayer";
const LEFT_BTN_ID = "left";
const RIGHT_BTN_ID = "right";
const VIDEO_DURATION_OUTPUT = "videoDurationOutput";
const VIDEO_RANGE = "myRange";
const VIDEO_VOLUME = "volume";
const VIDEO_VOLUME_SVG = "dynamic";
const VIDEO_FULLSCREEN = "fullScreen";
const BANNER_CONTROL = "controls";

function init() {
    const btnStart = get(START_BTN_ID);
    const video = get(VIDEO_PLAYER_ID);
    const btnLeft = get(LEFT_BTN_ID);
    const btnRight = get(RIGHT_BTN_ID);
    const videoRange = get(VIDEO_RANGE);
    const videoVolume = get(VIDEO_VOLUME);
    const videoFullScreen = get(VIDEO_FULLSCREEN);


    btnStart.addEventListener("click", play, false);
    video.addEventListener(
        "canplay",
        () => {
            videoRange.setAttribute("max", Math.floor(video.duration));
        },
        false
    );
    video.addEventListener("timeupdate", videoDuration, false); //canplay
    videoRange.addEventListener(
        "input",
        () => {
            video.currentTime = videoRange.value;
        },
        false
    );
    btnLeft.addEventListener(
        "click",
        () => {
            video.currentTime = video.currentTime - 5;
        },
        false
    );
    btnRight.addEventListener(
        "click",
        () => {
            video.currentTime = video.currentTime + 5;
        },
        false
    );
    videoVolume.addEventListener("click", moveVolume, false);
    videoFullScreen.addEventListener("click", fullScreen, false);
}

function get(id) {
    return document.getElementById(id);
}

function play() {
    const video = get(VIDEO_PLAYER_ID);
    const btnStart = get(START_BTN_ID);
    if (video.paused) {
        video.play();
        btnStart.innerHTML = "Pause";
    } else {
        video.pause();
        btnStart.innerHTML = "Play";
    }
}

function videoDuration() {
    const video = get(VIDEO_PLAYER_ID);
    let videoDurationOutput = get(VIDEO_DURATION_OUTPUT);
    let hasHours = video.duration / 3600 >= 1.0;
    videoDurationOutput.innerHTML = `${formatTime(
    video.currentTime,
    hasHours
  )} / ${formatTime(video.duration, hasHours)}`;
    let videoRange = get(VIDEO_RANGE);
    videoRange.value = video.currentTime;
}

function moveVolume() {
    const video = get(VIDEO_PLAYER_ID);
    const dynamicSvg = get(VIDEO_VOLUME_SVG);
    (!video.muted) ? dynamicSvg.style.fill = "#ccc": dynamicSvg.style.fill = "#333"
    video.muted = !video.muted;
}

function fullScreen() {
    const bannerControl = get(BANNER_CONTROL);
    const video = get(VIDEO_PLAYER_ID);
    if (video.width < screen.width - 20) {
        video.width = screen.width - 20;
        bannerControl.style.width = video.width + "px";
    } else {
        video.width = 600;
        bannerControl.style.width = video.width + "px";
    }
}

function formatTime(time, hours) {
    if (hours) {
        var h = Math.floor(time / 3600);
        time = time - h * 3600;

        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);

        return h.lead0(2) + ":" + m.lead0(2) + ":" + s.lead0(2);
    } else {
        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);

        return m.lead0(2) + ":" + s.lead0(2);
    }
}

Number.prototype.lead0 = function (n) {
    var nz = "" + this;
    while (nz.length < n) {
        nz = "0" + nz;
    }
    return nz;
};