// Git requirements: 10+ commits, 3+ branches, 2+ issues.

audioPlayer = document.querySelector(".audio-player");
playButton = document.querySelector(".play-button");
pauseButton = document.querySelector(".pause-button");
volumeUp = document.querySelector(".volume-up");
volumeDown = document.querySelector(".volume-down");

playButton.addEventListener("click", function() {
	audioPlayer.play()
});

pauseButton.addEventListener("click", function() {
	audioPlayer.pause()
});

volumeUp.addEventListener("click", function() {
	audioPlayer.volume += 0.1;
});

volumeDown.addEventListener("click", function() {
	audioPlayer.volume -= 0.1;
});

// audioPlayer.play();
// window.setTimeout(audioPlayer.pause(), 3000);