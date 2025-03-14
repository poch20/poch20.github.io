// Fade-in Effect for Parallax Content
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

// Spotify Player Toggle
const spotifyPlayer = document.getElementById('spotify-player');
const musicButton = document.getElementById('music-button');

musicButton.addEventListener('click', () => {
    if (spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '') {
        spotifyPlayer.style.display = 'block';
        musicButton.textContent = 'TIGHT'; // Sexy vibe 😉
    } else {
        spotifyPlayer.style.display = 'none';
        musicButton.textContent = 'BUKA'; // Chill vibe 🥴
    }
});
