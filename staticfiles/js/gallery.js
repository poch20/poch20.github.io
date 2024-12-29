const audio = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicToggle.textContent = "Play Lo-Fi";
    } else {
        audio.play();
        musicToggle.textContent = "Pause Lo-Fi";
    }
    isPlaying = !isPlaying;
});
