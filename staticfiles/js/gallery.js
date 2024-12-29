const spotifyPlayer = document.getElementById('spotify-player');
const musicButton = document.getElementById('music-button');

function toggleMusic() {
  if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
    spotifyPlayer.style.display = 'block';
    musicButton.textContent = 'Pause Spotify';
  } else {
    spotifyPlayer.style.display = 'none';
    musicButton.textContent = 'Play Lo-Fi';
  }
}

musicButton.addEventListener('click', toggleMusic);
