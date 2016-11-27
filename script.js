
// Git requirements: 10+ commits, 3+ branches, 2+ issues.

function Song(name, artist, url) {
	this.name = name;
	this.artist = artist;
	this.url = url;
}

function SongCreator(url) {
	var inputUrl = prompt("Enter the url for your song.");
	var inputName = prompt("Enter the song name.");
	var inputArtist = prompt("Enter the song artist.");
		
}

function jukeboxConstruct(songs) {
	this.songs = songs;

	this.audioPlayer = document.querySelector(".audio-player");
	this.playButton = document.querySelector(".play-button");
	this.pauseButton = document.querySelector(".pause-button");
	this.volumeUpButton = document.querySelector(".volume-up");
	this.volumeDownButton = document.querySelector(".volume-down");

	this.checkSongArray = function() {
		if (typeof this.songs !== "array") {
			this.songs = [];
			console.log("Song list empty");
		}
	}
	this.checkSongArray();

	this.addSong = function(newSong) {
		this.songs.push(newSong);
	}
	this.addSongArray = function(songArray) {
		this.songs = this.songs.concat(songArray);
	}

	this.play = function() {
		this.audioPlayer.play();
	}
	this.pause = function() {
		this.audioPlayer.pause()
	}
	this.volumeUp = function() {
		this.audioPlayer.volume += 0.1;
	}
	this.volumeDown = function() {
		this.audioPlayer.volume -= 0.1;
	}

	this.changeSong = function(songToPlay) {
		this.audioPlayer.src = songToPlay.url;
	}

	// this.createPlaylist

	this.loadSong = function(songUrl) {
		// This should basically be the addSong function with a user prompt
		// 	or html form for input
		// Need to create a playlist attribute? and peripheral functions
	}

	this.listSongs = function() {
		this.songNameArray = [];

		for (var k = 0; k < this.songs.length; k++) {

			this.songNameArray[k] = this.songs[k].artist + ' - ' 
				+ this.songs[k].name;
		}
		return this.songNameArray;
	}
}

// ----------------------------	//
// 								//
//  Instantiating the Jukebox 	//
// 								//
// ----------------------------	//


// Something here like:
// var userInput = 

var Jukebox = new jukeboxConstruct();


// Adding button functionality. For some reason I couldn't get this
// to work as a method on jukeboxConstruct. Using this. didn't work,
// I had to specify Jukebox! wtf?

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


// Loading songs

var meshuggahClockworks = new Song("Clockworks", "Meshuggah", "audio-files/meshuggah-01-clockworks.mp3");
// var 

Jukebox.addSong(meshuggahClockworks);
Jukebox.addSong(new Song("Specific Meaning in a Group of Dots", "Entheos", "audio-files/01 Specific Meaning in a Group of Dots.mp3"));

Jukebox.changeSong(meshuggahClockworks);