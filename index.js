const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.getElementById('lightbox-close');
const galleryImages = document.querySelectorAll('.galleryImg');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
const loadMoreBtn = document.getElementById('load-more');
const galleryRow = document.getElementById('gallery-row');

let currentIndex = 0;

galleryImages.forEach((img) => {
  img.addEventListener('click', function() {
    currentIndex = parseInt(this.getAttribute('data-index')) - 1;
    const imgSrc = this.querySelector('img').src;
    const imgAlt = this.querySelector('img').alt;
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = imgAlt;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

prevBtn.addEventListener('click', function() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
  updateLightboxImage();
});

nextBtn.addEventListener('click', function() {
  currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
  updateLightboxImage();
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    prevBtn.click(); // Trigger the previous button click
  } else if (event.key === 'ArrowRight') {
    nextBtn.click(); // Trigger the next button click
  }
});

function updateLightboxImage() {
  const imgSrc = galleryImages[currentIndex].querySelector('img').src;
  const imgAlt = galleryImages[currentIndex].querySelector('img').alt;
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = imgAlt;
}
