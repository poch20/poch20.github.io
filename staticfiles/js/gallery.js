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
