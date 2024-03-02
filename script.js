// STEP 1

document.querySelectorAll('audio').forEach(function(audio) {
    audio.addEventListener('play', function() {
        // Pause other audio elements and reset their playback position
        document.querySelectorAll('audio').forEach(function(otherAudio) {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });

    audio.addEventListener('ended', function() {
        // Reset playback position when an audio element finishes playing
        audio.currentTime = 0;
    });
});

// Get all video elements and add event listeners
const videos = document.querySelectorAll('video');

videos.forEach(video => {
video.addEventListener('play', function () {
// Pause all other videos when one starts playing
videos.forEach(otherVideo => {
    if (otherVideo !== video) {
        otherVideo.pause();
    }
});
});
});

// STEP 2

document.querySelectorAll('audio').forEach(function (audio) {
    audio.addEventListener('play', function () {
        // Pause all videos when audio starts playing
        document.querySelectorAll('video').forEach(function (video) {
            video.pause();
        });
    });
});

document.querySelectorAll('video').forEach(function (video) {
    video.addEventListener('play', function () {
        // Pause all audio when video starts playing
        document.querySelectorAll('audio').forEach(function (audio) {
            audio.pause();
        });
    });
});

//STEP 3 >Here is the problem!

document.addEventListener("visibilitychange", function() {
if (document.visibilityState === 'hidden') {
// Tab is not visible, pause or stop your media elements
pauseMedia();
} else {
// Tab is visible again, resume playing your media elements if needed
resumeMedia();
}
});

function pauseMedia() {
let videoElement = document.getElementById('video1');
let audioElement = document.getElementById('myAudio');

if (videoElement) {
videoElement.pause();
}

if (audioElement) {
audioElement.pause();
}
}
/*
function resumeMedia() {
var videoElement = document.getElementById('video1');
var audioElement = document.getElementById('myAudio');

if (videoElement) {
videoElement.play();
}

if (audioElement) {
audioElement.play();
}
}
*/