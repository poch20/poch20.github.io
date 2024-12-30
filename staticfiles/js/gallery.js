// Spotify Player Toggle
const spotifyPlayer = document.getElementById('spotify-player');
const musicButton = document.getElementById('music-button');

musicButton.addEventListener('click', () => {
    if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
        spotifyPlayer.style.display = 'block';
        musicButton.textContent = 'TIGHT'; // Sexy vibe 😉
    } else {
        spotifyPlayer.style.display = 'none';
        musicButton.textContent = 'SHOW'; // Chill vibe 🥴
    }
});
