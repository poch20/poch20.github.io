// Spotify Functionality
const musicButton = document.getElementById('musicButton');
const iframe = document.querySelector('.music iframe');

musicButton.addEventListener('click', () => {
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
        musicButton.textContent = 'TIGHT'; // Sexy twist!
    } else {
        iframe.style.display = 'none';
        musicButton.textContent = 'SHOW';
    }
});

// Parallax Debug Note
// console.log("Parallax and vibes activated!");


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

// Flicker effect for Sweetheart Neon Sign
const sweetheartNeon = document.querySelector('.sweetheart-neon');

setInterval(() => {
    const isVisible = Math.random() > 0.5; // Random flicker effect
    sweetheartNeon.style.opacity = isVisible ? '1' : '0.8';
}, 300); // Adjust timing for flicker
