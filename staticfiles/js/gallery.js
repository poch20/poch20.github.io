// Toggle Music Functionality
const audio = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicToggle.textContent = "Play Music";
    } else {
        audio.play();
        musicToggle.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});
