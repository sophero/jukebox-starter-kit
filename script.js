
// Git requirements: 10+ commits, 3+ branches, 2+ issues.

function jukeboxConstruct(songs) {
	this.songs = songs;
	this.addSong = function(newSong) {
		this.songs = this.songs.push(newSong);
	}
	this.addSongArray = function(songArray) {
		this.songs = this.songs.concat(songArray);
	}
	this.audioPlayer = document.querySelector(".audio-player");
	this.playButton = document.querySelector(".play-button");
	this.pauseButton = document.querySelector(".pause-button");
	this.volumeUp = document.querySelector(".volume-up");
	this.volumeDown = document.querySelector(".volume-down");

	this.play = function() {
		this.audioPlayer.play();
	}

	this.pause = function() {
		this.audioPlayer.pause()
	}

	this.playButton.addEventListener("click", this.play);
	this.pauseButton.addEventListener("click", this.pause);

// Jukebox.volumeUpButton.addEventListener("click", function() {
// 	Jukebox.volumeUp();
// });

// Jukebox.volumeDownButton.addEventListener("click", function() {
// 	Jukebox.volumeDown();
// });

}

var Jukebox = new jukeboxConstruct();

// var Jukebox = {
// 	songs: [],
// 	audioPlayer: document.querySelector(".audio-player"),
// 	playButton: document.querySelector(".play-button"),
// 	pauseButton: document.querySelector(".pause-button"),
// 	volumeUpButton: document.querySelector(".volume-up"),
// 	volumeDownButton: document.querySelector(".volume-down"),


// 	play: function() {
// 		this.audioPlayer.play();
// 	},
// 	pause: function() {
// 		this.audioPlayer.pause();
// 	},
// 	volumeUp: function() {
// 		this.audioPlayer.volume += 0.1;
// 	},
// 	volumeDown: function() {
// 		this.audioPlayer.volume -= 0.1; 
// 	}
// }

// Untested:
// // loadSong: function(song) {

// // }
// changeSong: function(song) {
// 	this.audioPlayer.src = song.url;
// }
// // listSongs: function() {
// // 	for (var k = 0; k < this.songs.length; k++) {

// // 	}
// // }
// addSong: function(newSong) {
// 	this.songs.push(newSong);
// },
// addSongArray: function(songArray) {
// 	this.songs = this.songs.concat(songArray);
// }


function Song(filename, artist, url) {
	this.filename = filename;
	this.artist = artist;
	this.url = url;
}




// Jukebox.playButton.addEventListener("click", function() {
// 	Jukebox.play();
// });

// Jukebox.pauseButton.addEventListener("click", function() {
// 	Jukebox.pause();
// });

// Jukebox.volumeUpButton.addEventListener("click", function() {
// 	Jukebox.volumeUp();
// });

// Jukebox.volumeDownButton.addEventListener("click", function() {
// 	Jukebox.volumeDown();
// });

