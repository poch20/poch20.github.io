// Spotify Functionality
const musicButton = document.getElementById('musicButton');
const spotifyPlayer = document.getElementById('spotify-player');

// Toggle Spotify Player Visibility
musicButton.addEventListener('click', () => {
  const isHidden = spotifyPlayer.style.display === 'none';
  spotifyPlayer.style.display = isHidden ? 'block' : 'none';
  musicButton.textContent = isHidden ? 'HIDE' : 'SHOW';
});

// Smooth Parallax Scroll Effect
const parallaxSections = document.querySelectorAll('.parallax-content');

window.addEventListener('scroll', () => {
  parallaxSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
    }
  });
});
