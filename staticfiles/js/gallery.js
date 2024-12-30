// Spotify Functionality
const musicButton = document.getElementById('musicButton');
const spotifyPlayer = document.getElementById('spotify-player');

// Initialize Spotify player visibility
spotifyPlayer.style.display = 'none';

musicButton.addEventListener('click', () => {
    const isHidden = spotifyPlayer.style.display === 'none';
    spotifyPlayer.style.display = isHidden ? 'block' : 'none';
    musicButton.textContent = isHidden ? 'HIDE' : 'SHOW'; // Adjust button text
});

// Smooth Fade-in Effect for Parallax Content
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

// Neon Flicker Effect for Sweetheart Text
const sweetheartNeon = document.querySelector('.sweetheart-neon');

setInterval(() => {
    sweetheartNeon.style.opacity = Math.random() > 0.5 ? '1' : '0.8';
}, 300);
