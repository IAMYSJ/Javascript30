/* Get the elements */
const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleButton = player.querySelector('.toggle');
const slider = player.querySelectorAll('.player__slider');
const skipButton = player.querySelectorAll('button[data-skip]');
const fullButton = player.querySelector('.full');

/* function */
function playOrPause() {
    video.paused ? video.play() : video.pause();
    video.paused ? toggleButton.textContent='►':toggleButton.textContent='||';
    
    let percentage = (video.currentTime/video.duration)*100;
    progressBar.style = `flex-basis: ${percentage}%`;
}

function slideChange() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);

    let percentage = (video.currentTime/video.duration)*100;
    progressBar.style = `flex-basis: ${percentage}%`;
}

function handleProgress() {
    let percentage = (video.currentTime/video.duration)*100;
    progressBar.style = `flex-basis: ${percentage}%`;
}

function moveProgress(e) {
    const progressTime = (e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime = progressTime;
}

function fullScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}

/* Event Listener */
video.addEventListener('click', playOrPause);
video.addEventListener('timeupdate', handleProgress);
toggleButton.addEventListener('click', playOrPause);

slider.forEach(slide => slide.addEventListener('click', slideChange));
slider.forEach(slide => slide.addEventListener('mousemove', slideChange));
skipButton.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', moveProgress);
progress.addEventListener('mousemove', (e) => mousedown && moveProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullButton.addEventListener('click', fullScreen);
