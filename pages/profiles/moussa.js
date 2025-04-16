let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closebtn = document.querySelector('.close-video');
playButton.onclick =() =>{
    video.classList.add("show-video");
}
