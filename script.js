// Git requirements: 10+ commits, 3+ branches, 2+ issues.

var Jukebox = {
	songs: [],
	audioPlayer: document.querySelector(".audio-player"),
	playButton: document.querySelector(".play-button"),
	pauseButton: document.querySelector(".pause-button"),
	volumeUpButton: document.querySelector(".volume-up"),
	volumeDownButton: document.querySelector(".volume-down"),
	
	play: function() {
		this.audioPlayer.play();
	},
	pause: function() {
		this.audioPlayer.pause();
	},
	volumeUp: function() {
		this.audioPlayer.volume += 0.1;
	},
	volumeDown: function() {
		this.audioPlayer.volume -= 0.1;
	}

	// addSong: function(newSong) {
	// 	songs.push(newSong);
	// },
	// addSongArray: function(songArray) {
	// 	songs = songs.concat(songArray);
	// }
}

function Song(filename, artist, url) {
	this.filename = filename;
	this.artist = artist;
	this.url = url;
}




Jukebox.playButton.addEventListener("click", function() {
	Jukebox.play();
});

Jukebox.pauseButton.addEventListener("click", function() {
	Jukebox.pause();
});

Jukebox.volumeUpButton.addEventListener("click", function() {
	Jukebox.volumeUp();
});

Jukebox.volumeDownButton.addEventListener("click", function() {
	Jukebox.volumeDown();
});

// audioPlayer = document.querySelector(".audio-player");
// playButton = document.querySelector(".play-button");
// pauseButton = document.querySelector(".pause-button");
// volumeUp = document.querySelector(".volume-up");
// volumeDown = document.querySelector(".volume-down");

