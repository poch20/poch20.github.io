document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.getElementById('music-button');
  let isPlaying = false;
  const spotifyPlayer = document.getElementById('spotify-player');

  // Spotify toggle functionality
  musicButton.addEventListener('click', () => {
    if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
      spotifyPlayer.style.display = 'block';
      musicButton.textContent = 'Pause Spotify';
    } else {
      spotifyPlayer.style.display = 'none';
      musicButton.textContent = 'Play Lo-Fi';
    }
  });

  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      alert(`This feature will expand soon!`);
    });
  });
});
