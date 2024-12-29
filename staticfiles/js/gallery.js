document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.getElementById('music-button');
  let isPlaying = false;
  const audio = new Audio('staticfiles/music/lofi.mp3');

  musicButton.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      musicButton.textContent = 'Play Lo-Fi';
    } else {
      audio.play();
      musicButton.textContent = 'Pause Lo-Fi';
    }
    isPlaying = !isPlaying;
  });

  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      alert(`This feature will expand soon!`);
    });
  });
});
