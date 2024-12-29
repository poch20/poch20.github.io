const spotifyPlayer = document.querySelector('iframe');
const musicButton = document.getElementById('music-button');

function toggleMusic() {
    if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
        spotifyPlayer.style.display = 'block';
        musicButton.textContent = 'Pause Lo-Fi';
    } else {
        spotifyPlayer.style.display = 'none';
        musicButton.textContent = 'Play Lo-Fi';
    }
}
