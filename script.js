
// Git requirements: 10+ commits, 3+ branches, 2+ issues.

function Song(name, artist, url) {
	this.name = name;
	this.artist = artist;
	this.url = url;
}

function jukeboxConstruct(songs) {
	this.songs = songs;

	this.nowPlaying = document.querySelector(".now-playing");
	this.loadButton = document.querySelector(".load-button");
	this.songList = document.querySelector(".song-list");

	// Audio playback controls
	this.audioPlayer = document.querySelector(".audio-player");
	this.playButton = document.querySelector(".play-button");
	this.pauseButton = document.querySelector(".pause-button");
	this.volumeUpButton = document.querySelector(".volume-up");
	this.volumeDownButton = document.querySelector(".volume-down");

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


	this.addSong = function(newSong) {
		this.songs.push(newSong);
		this.listSongs();
		console.log("Added " + newSong.artist + " - " + newSong.name 
			+ " to songs.");
	}
	this.addSongArray = function(songArray) {
		this.songs = this.songs.concat(songArray);
	}

	this.loadSong = function() {
		var inputUrl = prompt("Enter the url for your song.");

		if (inputUrl == "") {
			alert("Please enter a valid url.");
			inputUrl = prompt("Enter the url for your song.");
			if (inputUrl == "") {
				alert("Error: valid URL required.");
				return
			}
		}

		var inputName = prompt("Enter the song name.");

		if (inputName == "") {
			alert("Please enter a valid name.");
			inputName = prompt("Enter the song name.");
			if (inputName == "") {
				alert("Error: song name required.");
				return
			}
		}

		var inputArtist = prompt("Enter the song artist.");

		if (inputArtist == "") {
			alert("Please enter a valid artist.");
			inputArtist = prompt("Enter the song artist.");
			if (inputArtist == "") {
				alert("Error: artist name required.");
				return
			}
		}

		Jukebox.addSong(new Song(inputName, inputArtist, inputUrl));
	}


	this.changeSong = function(songToPlay) {
		this.audioPlayer.src = songToPlay.url;
		this.nowPlaying.innerHTML = "Currently playing: " + 
			songToPlay.artist + ' - ' + songToPlay.name;
	}

	// this.createPlaylist

	this.listSongs = function() {
		this.songNameArray = [];
		this.songList.innerHTML = "";

		for (var k = 0; k < this.songs.length; k++) {

			this.songList.innerHTML += "<li>" + this.songs[k].artist + " - " 
				+ this.songs[k].name + "</li>";


			this.songNameArray[k] = this.songs[k].artist + ' - ' 
				+ this.songs[k].name;
		}
		return this.songNameArray;
	}

	// Check for input array.
	this.checkSongArray = function() {
		if (typeof this.songs !== "array") {
			this.songs = [];
			console.log("Song list empty");
		}
	}
	this.checkSongArray();

}

// ----------------------------	//
// 								//
//  Instantiating the Jukebox 	//
// 								//
// ----------------------------	//


// Something here like:
// var userInput = 

var Jukebox = new jukeboxConstruct();


// Adding button functionality.
// For some reason I couldn't get addEventListneres to work when called
// from within jukeboxConstruct. Using this.etc didn't work, I 
// had to specify Jukebox. What's going on?

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

Jukebox.loadButton.addEventListener("click", function() {
	Jukebox.loadSong();
})


// Test files

var meshuggahClockworks = new Song("Clockworks", "Meshuggah", "audio-files/meshuggah-01-clockworks.mp3");

Jukebox.addSong(meshuggahClockworks);
Jukebox.addSong(new Song("Specific Meaning in a Group of Dots", "Entheos", "audio-files/01 Specific Meaning in a Group of Dots.mp3"));

// Jukebox.changeSong(meshuggahClockworks);

