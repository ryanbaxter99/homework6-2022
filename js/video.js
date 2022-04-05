var video = document.querySelector("#player1")

// load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById('volume').innerHTML = video.volume * 100 + "%";
});

// pausing the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slower
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing down");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

// faster 
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up");
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
});

// skip
document.querySelector("#skip").addEventListener("click", function() {

	console.log("Original Location: " + video.currentTime);

	// if th currnt time + 15 is greater then the video length go back to 0
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log("Video restarted")
	} 
	// if not then just add 15 
	else {
		video.currentTime += 15;
		console.log("15 seconds added to viedeo")
	}
	console.log("New Location: " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)

	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video muted");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video unmuted");
	}
});

// volume slider 
document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value / 100; 
	document.querySelector("#volume").innerHTML = this.value + "%";
});

// styling
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
	console.log(video.classList);
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
	console.log(videp.classList);
});