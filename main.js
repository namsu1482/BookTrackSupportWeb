/* ==========================================
   BookTrack Support Web - Interactive Logic
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hero Slideshow Autoplay
    initHeroSlideshow();

    // 2. Tab Control (Platform Switcher)
    initPlatformTabs();

    // 3. Mode Control (Standard vs Store Switcher)
    initModeTabs();

    // 4. Carousel Navigation
    initCarousel();

    // 5. Scroll Reveal Animations
    initScrollReveal();
});

/**
 * Automates the fading slideshow inside the Hero phone mockup
 */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('#hero-slideshow .slide');
    if (slides.length <= 1) return;

    let currentSlideIndex = 0;
    const slideInterval = 3500; // 3.5 seconds

    setInterval(() => {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add('active');
    }, slideInterval);
}

/**
 * Global Gallery State
 */
let currentPlatform = 'ios';
let currentMode = 'store';

let carouselStates = {
    'ios-store': { index: 0 },
    'ios-standard': { index: 0 },
    'android-store': { index: 0 },
    'android-standard': { index: 0 }
};

/**
 * Toggles showcase platform when tabs are clicked
 */
function initPlatformTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPlatform = btn.getAttribute('data-platform');
            if (targetPlatform === currentPlatform) return;

            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentPlatform = targetPlatform;
            updateGallery();
        });
    });
}

/**
 * Toggles showcase mode (Standard / Store) when buttons are clicked
 */
function initModeTabs() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetMode = btn.getAttribute('data-mode');
            if (targetMode === currentMode) return;

            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentMode = targetMode;
            updateGallery();
        });
    });
}

/**
 * Updates the visible gallery track and applies active styling
 */
function updateGallery() {
    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {
        track.classList.remove('active');
    });

    const activeKey = `${currentPlatform}-${currentMode}`;
    const targetTrack = document.getElementById(`${activeKey}-track`);
    if (targetTrack) {
        targetTrack.classList.add('active');
    }

    resetCarouselState(activeKey);
}

/**
 * Custom Responsive Screenshot Carousel Slider
 */
function initCarousel() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
        navigateCarousel(-1);
    });

    nextBtn.addEventListener('click', () => {
        navigateCarousel(1);
    });

    // Initialize display classes
    Object.keys(carouselStates).forEach(key => {
        updateCarouselCenterHighlight(key);
    });

    // Handle window resize to adjust sliding offsets dynamically
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            Object.keys(carouselStates).forEach(key => {
                resetCarouselState(key);
            });
        }, 150);
    });
}

function navigateCarousel(direction) {
    const activeKey = `${currentPlatform}-${currentMode}`;
    const activeTrack = document.getElementById(`${activeKey}-track`);
    if (!activeTrack) return;

    const items = activeTrack.querySelectorAll('.carousel-item');
    if (items.length === 0) return;

    const state = carouselStates[activeKey];
    const containerWidth = activeTrack.parentElement.offsetWidth;
    const itemWidth = items[0].offsetWidth;
    const gap = 24; // matches CSS gap

    // Calculate how many items can fit in the viewport
    const visibleCount = Math.floor(containerWidth / (itemWidth + gap)) || 1;
    const maxIndex = Math.max(0, items.length - visibleCount);

    // Update index
    state.index = Math.min(Math.max(0, state.index + direction), maxIndex);

    // Apply offset transition
    const offset = state.index * (itemWidth + gap);
    activeTrack.style.transform = `translateX(-${offset}px)`;

    updateCarouselCenterHighlight(activeKey);
}

function resetCarouselState(key) {
    if (!carouselStates[key]) return;
    carouselStates[key].index = 0;
    const track = document.getElementById(`${key}-track`);
    if (track) {
        track.style.transform = 'translateX(0px)';
    }
    updateCarouselCenterHighlight(key);
}

/**
 * Adds highlighted styling to center/visible items
 */
function updateCarouselCenterHighlight(key) {
    const track = document.getElementById(`${key}-track`);
    if (!track) return;

    const items = track.querySelectorAll('.carousel-item');
    const state = carouselStates[key];
    
    items.forEach((item, idx) => {
        if (idx === state.index) {
            item.classList.add('center-active');
        } else {
            item.classList.remove('center-active');
        }
    });
}

/**
 * Entrance fade-in transitions on scroll using IntersectionObserver
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15, // trigger when 15% visible
            rootMargin: '0px 0px -50px 0px' // offset bottom window boundary
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }
}
