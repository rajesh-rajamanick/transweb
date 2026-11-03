// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Hero Carousel Logic (Runs only on index.html if carousel exists)
let currentSlide = 0;
const totalSlides = 3;
const track = document.getElementById('carousel-track');
let autoSlideInterval;

function updateCarousel() {
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    updateDots();
}

function updateDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (dot) {
            if (i === currentSlide) {
                dot.className = "w-2 h-2 rounded-sm bg-accentBlue border border-white shadow-md transition-all scale-110";
            } else {
                dot.className = "w-2 h-2 rounded-sm bg-white/50 border border-white/80 transition-all hover:bg-white";
            }
        }
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function startAutoSlide() {
    if (track) {
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 3000);
    }
}

if (track) {
    updateDots();
    startAutoSlide();

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        heroSection.addEventListener('mouseleave', () => startAutoSlide());
    }
}