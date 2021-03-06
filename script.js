// 

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
	this.chooseSongButton = document.querySelector(".choose-song-button");
	this.randomSongButton = document.querySelector(".random-song");

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

		// Check for valid input before creating object.

		if (inputUrl != null && inputName != null && inputArtist != null) {
			Jukebox.addSong(new Song(inputName, inputArtist, inputUrl));

		} else {
			alert("Error: Required input missing.");
		}

	}


	this.chooseSong = function() {
		var songIndex = prompt("Enter the number from the song list of the song you would like to play.");
		var songToPlay = this.songs[songIndex - 1];

		if (typeof songToPlay === "object") {
			this.changeSong(songToPlay);

		} else {
			alert("Error: " + songIndex + " not found in song list.");
		}

	}

	this.changeSong = function(songToPlay) {
		this.audioPlayer.src = songToPlay.url;
		this.play();
		this.nowPlaying.innerHTML = songToPlay.artist + ' - ' 
			+ songToPlay.name;
	}

	this.randomSong = function() {
		var randInt = Math.floor(Math.random() * this.songs.length);
		var songToPlay = this.songs[randInt];
		this.changeSong(songToPlay);
	}

	this.listSongs = function() {
		this.songList.innerHTML = "";

		for (var k = 0; k < this.songs.length; k++) {

			this.songList.innerHTML += "<li>" + this.songs[k].artist + " - " 
				+ this.songs[k].name + "</li>";

		}
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


var Jukebox = new jukeboxConstruct();


// Adding button functionality.
// For some reason I couldn't get addEventListener to work when it was
// called from within JukeboxBlueprint. Using this.etc didn't work, I 
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
});
Jukebox.chooseSongButton.addEventListener("click", function() {
	Jukebox.chooseSong();
})
Jukebox.randomSongButton.addEventListener("click", function() {
	Jukebox.randomSong();
})


// Adding songs

Jukebox.addSong(new Song("Clockworks", "Meshuggah", "audio-files/meshuggah-01-clockworks.mp3"));
Jukebox.addSong(new Song("Specific Meaning in a Group of Dots", "Entheos", "audio-files/01 Specific Meaning in a Group of Dots.mp3"));
Jukebox.addSong(new Song("Into Decay", "Meshuggah", "audio-files/10 Meshuggah - Into Decay.mp3"));
