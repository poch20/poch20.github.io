// -----------------------------------
// Parallax Fade-in Effect
// -----------------------------------
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

// -----------------------------------
// Spotify Player Toggle
// -----------------------------------
const spotifyPlayer = document.getElementById('spotify-player');
const musicButton = document.getElementById('music-button');

musicButton.addEventListener('click', () => {
    const isHidden = spotifyPlayer.style.display === 'none' || spotifyPlayer.style.display === '';
    spotifyPlayer.style.display = isHidden ? 'block' : 'none';
    musicButton.textContent = isHidden ? 'TIGHT' : 'BUKA'; // ✨ Sexy vibes!
});

// -----------------------------------
// Image Gallery Navigation (Smooth Scroll + Touch)
// -----------------------------------
const galleryContainer = document.getElementById('gallery-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const scrollAmount = 300; // amount of px to scroll per arrow click

prevBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// -----------------------------------
// Touch Swipe Support (Mobile)
// -----------------------------------
let touchStartX = 0;
galleryContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

galleryContainer.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
        galleryContainer.scrollBy({ left: -diff, behavior: 'smooth' });
    }
});

// -----------------------------------
// Image Modal Viewer with Navigation
// -----------------------------------
const modal = document.createElement('div');
modal.id = 'image-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span id="modal-close">&times;</span>
        <img id="modal-image" src="" alt="Image Preview" />
        <button id="modal-prev">&#8592;</button>
        <button id="modal-next">&#8594;</button>
    </div>
`;
document.body.appendChild(modal);

const allImages = document.querySelectorAll('#gallery-container img');
const modalImg = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');

let currentImgIndex = 0;

allImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        currentImgIndex = index;
    });
});

function updateModalImage() {
    modalImg.src = allImages[currentImgIndex].src;
}

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalPrev.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + allImages.length) % allImages.length;
    updateModalImage();
});

modalNext.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % allImages.length;
    updateModalImage();
});

// Close modal when tapping outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
